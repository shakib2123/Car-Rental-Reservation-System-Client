import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import image1 from "../../assets/images/testimonial/Alex-Jenna.jpeg";
import image2 from "../../assets/images/testimonial/Bria-Foster.jpeg";
import image3 from "../../assets/images/testimonial/Jerome Simone.jpeg";
import image4 from "../../assets/images/testimonial/Michele-Holly.jpeg";
import image5 from "../../assets/images/testimonial/Vincent-Lewis.jpeg";
import image6 from "../../assets/images/testimonial/Woodie-Brandon.jpeg";
import { Rating, Star } from "@smastrom/react-rating";

const testimonialData = [
  {
    id: 1,
    name: "Alex Jenna",
    job: "Small Business Owner",
    rating: 4,
    image: image1,
    description:
      "Campers Shop made our family camping trip unforgettable! The quality of the gear was top-notch, and the customer service was exceptional. We had everything we needed for a perfect adventure in the great outdoors!",
  },
  {
    id: 2,
    name: "Bria Foster",
    job: "Marketing Manager",
    rating: 4,
    image: image2,
    description:
      "I’m so glad I found Campers Shop! Their selection of tents and sleeping bags is amazing. The gear was durable and comfortable, making our hiking trip more enjoyable. Highly recommend for any camping enthusiast!",
  },
  {
    id: 3,
    name: "Jerome Simone",
    job: "Web Developer",
    rating: 5,
    image: image3,
    description:
      "From the easy online shopping experience to the high-quality products, Campers Shop exceeded my expectations. The camp stove and cookware I bought worked flawlessly. I’ll definitely be coming back for my next trip!",
  },
  {
    id: 4,
    name: "Michele Holly",
    job: "Entrepreneur",
    rating: 5,
    image: image4,
    description:
      "Campers Shop has become my go-to for camping gear. The product descriptions were accurate, the prices were reasonable, and the delivery was fast. Their equipment made our weekend getaway stress-free and fun!",
  },
  {
    id: 5,
    name: "Vincent Lewis",
    job: "Freelancer",
    rating: 5,
    image: image5,
    description:
      "I’ve been using gear from Campers Shop for several months now, and I’m impressed by the quality. The tent was easy to set up, and the camping chair was so comfortable. I’m looking forward to more outdoor adventures with their products!",
  },
  {
    id: 6,
    name: "Woodie Brandon",
    job: "Software Engineer",
    rating: 4,
    image: image6,
    description:
      "Campers Shop offers fantastic camping gear and accessories. The products I purchased were well-made and reliable, and the customer support team was friendly and helpful. I’m thrilled with my experience and my new camping gear!",
  },
];

const Testimonial = () => {
  const ratingStyles = {
    itemShapes: Star,
    itemStrokeWidth: 2,
    activeFillColor: "#F97316",
    activeStrokeColor: "#F97316",
    inactiveFillColor: "#fdd5b9",
    inactiveStrokeColor: "#fdd5b9",
  };
  return (
    <div className="pb-24 md:pb-40">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          TESTIMONIALS
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-100 font-bold text-center font-young-serif"
        >
          What Our Customers Are Saying.
        </h2>
        <p data-aos="fade-up" className="text-gray-300">
          We let our work speak for itself. Here are some of the testimonials
          from our clients.
        </p>
      </div>
      <div>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 ">
                    <Card data-aos="fade-left">
                      <CardContent className="flex h-[310px] items-center justify-center p-6">
                        <div className="flex flex-col justify-between gap-8">
                          <div className="space-y-4">
                            <Rating
                              className="size-6 w-fit max-w-24"
                              value={item?.rating}
                              itemStyles={ratingStyles}
                            />

                            <p className="text-gray-200">{item.description}</p>
                          </div>
                          <div className=" flex items-center gap-3">
                            <img
                              className="h-12 w-12 rounded-full overflow-hidden object-cover"
                              src={item.image}
                              alt="user-image"
                            />
                            <div>
                              <p className="text-orange-500 font-semibold">
                                {item.name}
                              </p>
                              <p className="text-gray-200">{item.job}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-orange-500 p-2 rounded-full cursor-pointer hover:bg-orange-600">
              &#9664;
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-orange-500 p-2 rounded-full cursor-pointer hover:bg-orange-600">
              &#9654;
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
