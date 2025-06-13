<?php

class RouterosAPI
{
    public $debug = true;
    public $connected = false;
    protected $port = 8728;
    protected $timeout = 3;
    protected $socket;

    public function connect($ip, $port = 8728, $username, $password)
    {
        $this->disconnect();

        if (!($this->socket = @fsockopen($ip, $port, $errno, $errstr, $this->timeout))) {
            return false;
        }

        $this->write('/login', true);
        $RESPONSE = $this->read(false);
        if (count($RESPONSE) < 1) return false;

        $chall = '';
        foreach ($RESPONSE as $r) {
            if (strpos($r, '!done') !== false) continue;
            if (strpos($r, '=ret=') === 0) $chall = substr($r, 5);
        }

        if (empty($chall)) return false;

        $chall = pack("H*", $chall);
        $md5 = md5("\x00" . $password . $chall, true);
        $this->write('/login', false);
        $this->write('=name=' . $username, false);
        $this->write('=response=00' . bin2hex($md5), true);

        $response = $this->read(false);
        foreach ($response as $r) {
            if (strpos($r, '!done') !== false) {
                $this->connected = true;
                return true;
            }
        }

        return false;
    }

    public function write($command, $last = true)
    {
        fwrite($this->socket, $this->encodeLength(strlen($command)) . $command);
        if ($last) fwrite($this->socket, "\x00");
    }

    public function read($parse = true)
    {
        $response = [];
        $i = 0;

        while (true) {
            $length = ord(fread($this->socket, 1));
            if ($length == 0) break;
            $response[$i++] = fread($this->socket, $length);
        }

        return $parse ? $this->parseResponse($response) : $response;
    }

    public function disconnect()
    {
        if ($this->socket) {
            fclose($this->socket);
            $this->socket = null;
        }

        $this->connected = false;
    }

    protected function encodeLength($length)
    {
        if ($length < 0x80) return chr($length);
        elseif ($length < 0x4000) return chr(($length >> 8) | 0x80) . chr($length & 0xFF);
        elseif ($length < 0x200000) return chr(($length >> 16) | 0xC0) . chr(($length >> 8) & 0xFF) . chr($length & 0xFF);
        elseif ($length < 0x10000000) return chr(($length >> 24) | 0xE0) . chr(($length >> 16) & 0xFF) . chr(($length >> 8) & 0xFF) . chr($length & 0xFF);
        else return chr(0xF0) . chr(($length >> 24) & 0xFF) . chr(($length >> 16) & 0xFF) . chr(($length >> 8) & 0xFF) . chr($length & 0xFF);
    }

    protected function parseResponse($response)
    {
        $parsed = [];
        foreach ($response as $res) {
            $parsed[] = $res;
        }
        return $parsed;
    }
}
