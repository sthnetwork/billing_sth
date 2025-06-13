@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
  <div>
    <h4 class="mb-3 mb-md-0">Selamat Datang di Dashboard</h4>
  </div>
  <div class="d-flex align-items-center flex-wrap text-nowrap">
    <div class="input-group flatpickr w-200px me-2 mb-2 mb-md-0" id="dashboardDate">
      <span class="input-group-text input-group-addon bg-transparent border-primary" data-toggle>
        <i data-lucide="calendar" class="text-primary"></i>
      </span>
      <input type="text" class="form-control bg-transparent border-primary" placeholder="Pilih Tanggal" data-input>
    </div>
    <button type="button" class="btn btn-outline-primary btn-icon-text me-2 mb-2 mb-md-0">
      <i class="btn-icon-prepend" data-lucide="printer"></i>
      Print
    </button>
    <button type="button" class="btn btn-primary btn-icon-text mb-2 mb-md-0">
      <i class="btn-icon-prepend" data-lucide="download-cloud"></i>
      Download Report
    </button>
  </div>
</div>

<div class="row">
  <div class="col-md-4 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Total Pelanggan</h6>
        <h3 class="mb-2">144</h3>
        <div class="d-flex align-items-baseline">
          <p class="text-success">
            <span>+5%</span>
            <i data-lucide="arrow-up" class="icon-sm mb-1"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Pemasukan Bulan Ini</h6>
        <h3 class="mb-2">Rp 24.500.000</h3>
        <div class="d-flex align-items-baseline">
          <p class="text-success">
            <span>+8%</span>
            <i data-lucide="arrow-up" class="icon-sm mb-1"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Koneksi Aktif</h6>
        <h3 class="mb-2">132</h3>
        <div class="d-flex align-items-baseline">
          <p class="text-danger">
            <span>-3%</span>
            <i data-lucide="arrow-down" class="icon-sm mb-1"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
