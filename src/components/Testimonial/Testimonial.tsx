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

const testimonialData = [
  {
    id: 1,
    name: "Alex Jenna",
    image: image1,
    description:
      "Campers Shop made our family camping trip unforgettable! The quality of the gear was top-notch, and the customer service was exceptional. We had everything we needed for a perfect adventure in the great outdoors!",
  },
  {
    id: 2,
    name: "Bria Foster",
    image: image2,
    description:
      "I’m so glad I found Campers Shop! Their selection of tents and sleeping bags is amazing. The gear was durable and comfortable, making our hiking trip more enjoyable. Highly recommend for any camping enthusiast!",
  },
  {
    id: 3,
    name: "Jerome Simone",
    image: image3,
    description:
      "From the easy online shopping experience to the high-quality products, Campers Shop exceeded my expectations. The camp stove and cookware I bought worked flawlessly. I’ll definitely be coming back for my next trip!",
  },
  {
    id: 4,
    name: "Michele Holly",
    image: image4,
    description:
      "Campers Shop has become my go-to for camping gear. The product descriptions were accurate, the prices were reasonable, and the delivery was fast. Their equipment made our weekend getaway stress-free and fun!",
  },
  {
    id: 5,
    name: "Vincent Lewis",
    image: image5,
    description:
      "I’ve been using gear from Campers Shop for several months now, and I’m impressed by the quality. The tent was easy to set up, and the camping chair was so comfortable. I’m looking forward to more outdoor adventures with their products!",
  },
  {
    id: 6,
    name: "Woodie Brandon",
    image: image6,
    description:
      "Campers Shop offers fantastic camping gear and accessories. The products I purchased were well-made and reliable, and the customer support team was friendly and helpful. I’m thrilled with my experience and my new camping gear!",
  },
];

const Testimonial = () => {
  return (
    <div className="my-24">
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
                            <svg
                              className="w-12 h-12"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              fill="currentColor"
                            >
                              <path
                                className="text-orange-500"
                                d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                              />
                            </svg>
                            <p className="text-gray-200">{item.description}</p>
                          </div>
                          <div className=" flex items-center gap-2">
                            <img
                              className="h-10 w-10 rounded-full overflow-hidden object-cover"
                              src={item.image}
                              alt="user-image"
                            />
                            <p className="text-orange-500">{item.name}</p>
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
