<script setup>
  
</script>

<template>
  <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">


  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
  <link href="../src/assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../src/assets/css/nucleo-svg.css" rel="stylesheet" />
  <link href="../src/assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- CSS Files -->
  <link id="pagestyle" href="../src/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet" />
</head>

<body class="g-sidenav-show   bg-gray-100">
  <div class="min-height-300 bg-primary position-absolute w-100"></div>
  <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
        <img src="../assets/img/R.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold">Risk Rank</span>
      </a>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/profile">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Profile</span>
            </router-link>
          </li>
        <li class="nav-item">
          <router-link class="nav-link " to="/risk">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Risk Assessment</span>
          </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link active" to="/lending">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Lending</span>
            </router-link>
          </li>
        <li class="nav-item">
          <a class="nav-link " href="./pages/sign-in.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <main class="main-content position-relative border-radius-lg ">
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-white active" aria-current="page">Lending</li>
          </ol>
          <h6 class="font-weight-bolder text-white mb-0">Lending</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group">
              <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" class="form-control" placeholder="Type here...">
            </div>
          </div>


        </div>
      </div>
    </nav>

    <div class="container-fluid py-4">
      <div class="row">
        <div class="col">
          <div class="card h-100">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Available loans</h6>
                </div>
                <div class="col-6 text-end">
                  <span class="btn btn-outline-primary btn-sm mb-0">Tier B</span>
                </div>
              </div>
            </div>
            <div class="card-body p-3 pb-0">
              <ul class="list-group">
                <li class="list-group-item border-0 ps-0 mb-2 border-radius-lg">
                    <div class="row">
                        <div class="col">
                            <h6 class="text-dark mb-1 font-weight-bold text-sm">OCBC</h6>
                            <span class="text-xs">Singapore</span>
                        </div>
                        <div class="col text-center">
                            <button class="btn btn-link text-dark text-sm mb-0 ms-4">5% interest p.a.</button>
                        </div>
                        <div class="col text-end">
                            <button class="btn btn-outline-primary text-dark text-sm mb-0 ms-4">Apply now</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item border-0 ps-0 mb-2 border-radius-lg">
                    <div class="row">
                        <div class="col">
                            <h6 class="text-dark mb-1 font-weight-bold text-sm">UOB</h6>
                            <span class="text-xs">Singapore</span>
                        </div>
                        <div class="col text-center">
                            <button class="btn btn-link text-dark text-sm mb-0 ms-4">7% interest p.a.</button>
                        </div>
                        <div class="col text-end">
                            <button class="btn btn-outline-primary text-dark text-sm mb-0 ms-4">Apply now</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item border-0 ps-0 mb-2 border-radius-lg">
                    <div class="row">
                        <div class="col">
                            <h6 class="text-dark mb-1 font-weight-bold text-sm">Affin Bank</h6>
                            <span class="text-xs">Malaysia</span>
                        </div>
                        <div class="col text-center">
                            <button class="btn btn-link text-dark text-sm mb-0 ms-4">9% interest p.a.</button>
                        </div>
                        <div class="col text-end">
                            <button class="btn btn-outline-primary text-dark text-sm mb-0 ms-4">Apply now</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item border-0 ps-0 mb-2 border-radius-lg">
                    <div class="row">
                        <div class="col">
                            <h6 class="text-dark mb-1 font-weight-bold text-sm">Orient Bank</h6>
                            <span class="text-xs">Vietnam</span>
                        </div>
                        <div class="col text-center">
                            <button class="btn btn-link text-dark text-sm mb-0 ms-4">12% interest p.a.</button>
                        </div>
                        <div class="col text-end">
                            <button class="btn btn-outline-primary text-dark text-sm mb-0 ms-4">Apply now</button>
                        </div>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        
      </div>
    </div>
  </main>
</body>
</template>

<script>
export default {
  data(){
    return {
      businessId: '',
      password: '',
    }
  },
  methods: {
    login(){
      if(this.businessId != '' && this.password != ''){
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped>

</style>
