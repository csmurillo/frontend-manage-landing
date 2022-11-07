import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../../styles/Footer.module.css';
import Card from "./Card";

const Testimonials:React.FC= ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      return (
        <div className="mb-11 lg:-mx-40">
            <h1 className="text-3xl italic text-center mb-16">What they’ve said</h1>
            <div className="mb-20">
                <Slider {...settings} className="gap-10">
                    <div>
                            <Card testimonailImage="/images/avatar-anisha.png" testimonailName="Anisha Li" testimonial="“Manage has supercharged our team’s workflow. The ability to maintain 
            visibility on larger milestones at all times keeps everyone motivated.”"/>
                    </div>
                    <div>
                        <div>
                            <Card testimonailImage="/images/avatar-ali.png" testimonailName="Ali Bravo" testimonial="“We have been able to cancel so many other subscriptions since using 
            Manage. There is no more cross-channel confusion and everyone is much 
            more focused.”"/>
                        </div>
                    </div>
                    <div>
                        <div>
                                <Card testimonailImage="/images/avatar-richard.png" testimonailName="Richard Watts" testimonial="“Manage allows us to provide structure and process. It keeps us organized 
            and focused. I can’t stop recommending them to everyone I talk to!”"/>
                            </div>
                    </div>
                    <div>
                        <div>
                                    <Card testimonailImage="/images/avatar-shanai.png" testimonailName="Shanai Gough" testimonial="“Their software allows us to track, manage and collaborate on our projects 
            from anywhere. It keeps the whole team in-sync without being intrusive.”"/>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="flex justify-center">
                <button className="px-8 py-3 bg-brightRed text-white rounded-full hover:bg-[#F98F75]">Get Started</button>
            </div>
        </div>
      );
};


export default Testimonials;