import styles from "@/components/testimonials.modules.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
            <div className="cardouter pt-4 pb-4 mt-6 mb-6">
                <div className="cardinner1 mt-5 mb-5">
                    <h5 className="card-title pt-5 ps-5 ">
<img src="quote.png" alt="" className="pe-2"/>
Testimonials
                    </h5>
                    <div className="card-description p-4 ps-5">
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </div>
                    <div className="image-container">
            <div className="image-column">
                <img src="Audio Track.png" alt="audio" className="full-width" />
            </div>
            <div className="image-column">
                <img src="Group 108.png" alt="profile" className="full-width" />
            </div>
        </div>
                </div>
            </div>

    </div>
  )
}

export default Testimonials
