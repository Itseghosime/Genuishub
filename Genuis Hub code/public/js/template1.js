
function templateRenderer() {
var headerBanner = document.querySelector('.banner__header');
var serviceDivision = document.querySelector('.sectionDivision');
var footer = document.querySelector('.footer__section');

// Header Section
let header = `
    <div class="banner">
        <div class="color-overlay">
            <div class="row">
                <div class="col-md-6">
                    <p>
                    Promoting <span>Socio-economic Growth</span> in Africa through
                    </p>
                    <h1>Communication For Development & Citizen Engagement</h1>
                    <div class="design"></div>
                    <p class="information">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur sit eos libero veniam ratione? Dignissimos labore
                    reprehenderit repellendus dolores? Blanditiis.
                    </p>
                    <div class="download-link">
                    <a href="#" class="bottons">
                        Biding Document <i class="fas fa-download"></i></a
                    ><a href="#" class="bottons">
                        Profile <i class="fas fa-download"></i>
                    </a>
                    <a href="#" class="bottons">
                        Tender Request <i class="fas fa-download"></i
                    ></a>
                    </div>
                    <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-md-6 map">
                    <img src="img/genius map 1.png" alt="" />
                </div>
            </div>
        </div>
    </div>
`;

// Service Section
let serviceTemplate = `
    <div class="bg-style">
        <div class="headingg">
        <h3>Service Divisions</h3>
        </div>
        <div class="container division">
        <div class="row">
            <div class="col-md-4">
            <div class="card">
                <div class="numb" style="background-color: #e31e24">1</div>
                <div class="card-img">
                <img src="img/divison-1.png" alt="" />
                </div>
                <div class="card-title">Genius Hub Global Initiative</div>
                <div class="card-body">
                Genius Hub Global Initiative is a Non-Governmental
                organization with a fast growing community that houses
                achievers through a success-driven program...
                <!-- <a href="#">View-More</a> -->
                </div>
            </div>
            </div>
            <div class="col-md-4">
            <div class="card">
                <div class="numb">2</div>
                <div class="card-img">
                <img src="img/division-2.png" alt="" />
                </div>
                <div class="card-title">Genius Hub Junior School Club</div>
                <div class="card-body">
                Genius Junior School Hub is a school club founded upon the
                need to raise role models, develop leaders, instill
                character in young children and teach them ICT skills...
                <!-- <a href="#">View-More</a> -->
                </div>
            </div>
            </div>
            <div class="col-md-4">
            <div class="card">
                <div class="numb" style="background-color: #b0cb1f">3</div>
                <div class="card-img">
                <img src="img/division-3.png" alt="" />
                </div>
                <div class="card-title">Young Girls Foundation</div>
                <div class="card-body">
                Genius Hub Young Girls Foundation is one that is concerned
                with empowering the girl child to give her a voice in the
                society and addressing other challenges of the girl child...
                <!-- <a href="#">View-More</a> -->
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
`;
// Footer Section
let footerSection = `
    <div class="form">
        <form action="#">
        <input type="email" placeholder="Subcribe for Our Daily News Letter">
        <input type="submit">
        </form>
        </div>
        <div class="container">
        <div class="row">
        <div class="col-12">
            <div class="footer-logo">
            <a href="#">
                <div class="logo">
                <img src="img/Genius Hub....png" alt="" />
                <h4>Genius Hub</h4>
                </div>
            </a>
            </div>
        </div>
        <div class="col-md-5">
            
            <div class="footer-info">
            <ul>
                <li>
                <p>Head Office:</p>
                Edo Production Centre, Magistrate Court Premises, off Sapele
                Road, Benin City.
                </li>
                <li>
                <p>Branch Office:</p>
                Moscow Filling Station, Moscow Junction, Ekpoma, Edo State.
                </li>
                <li>
                <p>Contact:</p>
                +2348183109822, +2347038255215
                </li>
                <li>
                <p>Email:</p>
                info@geniushubglobal.com, geniushubglobal@gmail.com
                </li>
            </ul>
            
            </div>

        </div>
        <div class="col-md-2 links">
            <ul>
            <li><h4>Quick Links</h4></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Donate</a></li>
            </ul>
        </div>

        <div class="col-md-5 footer-info pt-0 mt-4">
            <h4 class="mt-0">Social Links</h4>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>

        <div class="col-12 text-center mt-3">
            <h5>
            Copyright © 2021 - Genius Hub. All Rights Reserved
            </h5>
        </div>
        </div>
    </div>
`;


function makeRenders(){
    headerBanner.insertAdjacentHTML('afterbegin', header);
    serviceDivision.insertAdjacentHTML('afterbegin', serviceTemplate);
    footer.insertAdjacentHTML('afterbegin', footerSection)
}
makeRenders();
}
templateRenderer();