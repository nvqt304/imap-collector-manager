<div class="col-12">
    <div class="card card-primary card-outline">
        <div class="card-header">
            <h3 class="card-title">
                <i class="far fa-chart-pie"></i>
                Thông số
            </h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-info"><i class="fas fa-running"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Tổng quãng đường đã di chuyển</span>
                            <span class="info-box-number">360 km</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-info"><i class="fas fa-road"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Quãng đường di chuyển trong 24h</span>
                            <span class="info-box-number">50 km</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-info"><i class="fas fa-clock"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Tổng thời gian di chuyển</span>
                            <span class="info-box-number">1600 phút</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="col-12">
    <div class="card card-primary card-outline">
        <div class="card-header">
            <h3 class="card-title">
                <i class="far fa-chart-pie"></i>
                Bản đồ tổng quan
            </h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="maximize">
                    <i class="fas fa-expand"></i>
                 </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="card-body" style="height:550px;">
            <div class="row" id="googleMap" style="height:100%">
                
            </div>
        </div>
    </div>
</div>
<script src="dist/js/ggMap.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfTHZes2sfBdeH8kNK_wikq5cRRDIYCp8&callback=initMap"></script>
