<?php include_once 'header.php'; ?>

<section class="section-carousel l-banner">
	<div id="banner-slider" class="carousel slide banner-slider banner-slider-md" data-ride="carousel">

	<ol class="carousel-indicators">
	    <li data-target="#banner-slider" data-slide-to="0" class="active"></li>
	    <li data-target="#banner-slider" data-slide-to="1"></li>
	    <li data-target="#banner-slider" data-slide-to="2"></li>
	  </ol>

	  <div class="carousel-inner" role="listbox">
	    <div class="item active">
	      <div class="banner-img">
	      	<img src="images/banner2.jpg" alt="banner2">
	      </div>
	    </div>

	    <div class="item">
	      <div class="banner-img">
	      	<img src="images/banner.jpg" alt="banner">
	      </div>
	    </div>

	  </div>

	 <!--  <a class="left carousel-control" href="#banner-slider" role="button" data-slide="prev">
	    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	    <span class="sr-only">Previous</span>
	  </a>
	  <a class="right carousel-control" href="#banner-slider" role="button" data-slide="next">
	    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	    <span class="sr-only">Next</span>
	  </a> -->
	</div>
</section>

<div class="gap gap6em"></div>

<section class="section skin-white section-rooms section-bottom-line">
	<div class="container-fluid section-rooms-container">
		<div class="row">
			<div class="col-md-7 skin-white-services">
				<div class="title-heading">
					<h2 class="title rooms-header">delux rooms</h2>
				</div>

				<ul class="nav nav-tabs nav-tabs-primary" role="tablist" id="myTab">
					  <li role="presentation" class="active rooms-tabs"><a href="#room" aria-controls="room" role="tab" data-toggle="tab">room</a></li>
					  <li role="presentation" class="rooms-tabs"><a href="#rates" aria-controls="rates" role="tab" data-toggle="tab">rates</a></li>
					</ul>

					<div class="tab-content section-rooms-minimum">
					  <div role="tabpanel" class="tab-pane active" id="facilities">
					  	<div class="copy">
					  		<p>
					  			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
					  		</p>
					  		<p>
					  			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur consectetur adipisicing elit, sed do eiusmod tempor.
					  		</p>
					  	</div>
					  </div>
					  <div role="tabpanel" class="tab-pane" id="services">
					  	
					  </div>
					</div>
			</div>

			<div class="col-md-4">
				<h4 class="title-bold rooms-details">ROOM DETAILS</h4>
					 <ul class="list-group">
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Lorem ipsum dolor sit amet.</li>
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Dolor consectetur elit.</li>
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Duis aute irure dolor in reprehenderit.</li>
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Excepteur sint occaecat cupidatat.</li>
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Sed ut perspiciatis unde omnis. </li>
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Duis aute irure dolor in reprehenderit.</li>
					    <li class="list-group-item details-prop"><span class="glyphicon glyphicon-ok services-icon" aria-hidden="true"></span>Voluptatem accusantium doloremque. </li>
					 </ul>
						<div class="post-actions">
							<a href="#" class="btn btn-default single-button"> Book Now</a>
						</div>

			</div>
		</div>
	</div>
</section>

<?php include_once 'footer.php'; ?>
