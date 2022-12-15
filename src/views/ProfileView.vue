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
            <router-link class="nav-link active" to="/profile">
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
            <router-link class="nav-link " to="/lending">
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


  <div class="main-content position-relative max-height-vh-100 h-100">
    <br>
    <div class="card shadow-lg mx-4 card-profile-top">
      <div class="card-body p-3">
        <div class="row gx-4">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img src="../assets/img/testcompany123.png" alt="profile_image" class="w-100 border-radius-lg shadow-sm">
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">
                Test Company 123
              </h5>
              <p class="mb-0 font-weight-bold text-sm">
                Electronics Industry
              </p>
            </div>
          </div>
 
        </div>
      </div>
    </div>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-13">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Update Profile</p>
                <button class="btn btn-primary btn-sm ms-auto">Submit</button>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">Business' Information</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Name</label>
                    <input class="form-control" type="text" value="Test Company 123">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Email Address</label>
                    <input class="form-control" type="email" value="testcompany123@gmail.com">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Phone Number</label>
                    <input class="form-control" type="text" value="91234567">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Industry</label>
                    <input class="form-control" type="text" value="Electronics">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-13">
                    <div class="form-group">
                      <label for="example-text-input" class="form-control-label">Description</label>
                      <input class="form-control" type="text" value="Test Company 123 aims to enter the electronics scene through the use of A,B and C.">
                    </div>
                  </div>
              </div>
              <hr class="horizontal dark">
              <p class="text-uppercase text-sm">Contact Information</p>
              <div class="row">
                <div class="col-md-13">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Address</label>
                    <input class="form-control" type="text" value="Blk 111 Somewhere Road 33">
                  </div>
                </div>
                <div class="col-md-13">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">City</label>
                    <input class="form-control" type="text" value="Singapore">
                  </div>
                </div>
                <div class="col-md-13">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Country</label>
                    <input class="form-control" type="text" value="Singapore">
                  </div>
                </div>
                <div class="col-md-13">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Postal code</label>
                    <input class="form-control" type="text" value="430111">
                  </div>
                </div>
              </div>
              <hr class="horizontal dark">
              <p class="text-uppercase text-sm">Financial Information</p>
                <div>
                  <label for="myfile">Upload Financial Statement </label>
                  <br>
                  <input type="file" id="myfile" name="myfile" multiple></div>
                </div>
                <br>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Debt</label>
                    <input class="form-control" type="text" value="">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Shareholders' Equity</label>
                    <input class="form-control" type="text" value="">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Interest Expense</label>
                    <input class="form-control" type="text" value="">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Earnings Before Interest and Taxes (EBIT)</label>
                    <input class="form-control" type="text" value="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
    </div>
  </div>
  <div class="fixed-plugin">
    <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i class="fa fa-cog py-2"> </i>
    </a>
    <div class="card shadow-lg">
      <div class="card-header pb-0 pt-3 ">
        <div class="float-start">
        </div>
        <div class="float-end mt-4">
          <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
        <!-- End Toggle Button -->
      </div>
    </div>
  </div>
      <hr class="horizontal dark my-1">
</body>
</template>

<script>

</script>

<style scoped>

</style>
