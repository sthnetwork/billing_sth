<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('mikrotiks', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('ip_address');
            $table->integer('port_api')->default(8728);
            $table->string('username');
            $table->string('password');
            $table->enum('koneksi', ['vpn', 'public_ip'])->default('public_ip');
            $table->text('catatan')->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('mikrotiks');
    }
};
