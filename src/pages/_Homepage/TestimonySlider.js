import React from "react"
import Carousel from 'react-material-ui-carousel'
import TestimonySingle from "./HomepageTestimonialsComponent/TestimonySingle"
import TestimonialList from "./HomepageTestimonialsComponent/TestimonialList"


function TestimonySlider() {
    const TestimonialMapping = TestimonialList.map((testimonialItem) => {
        return (
            <TestimonySingle
                Name={testimonialItem.name}
                Image={testimonialItem.image}
                Position={testimonialItem.position}
                Testimony={testimonialItem.testimony}
            />
        )
    })

    return(
        <div className="testimonial-content">
            <Carousel 
                autoPlay={true}
                animation={"slide"}
                duration={1000}
                navButtonsAlwaysVisible={false}
                // navButtonsWrapperProps={{
                //     style: {
                //         bottom: '0',
                //         top: 'unset'
                //     }
                // }} 
            >
                
                {TestimonialMapping}
            </Carousel>
    </div>
    )
}

export default TestimonySlider