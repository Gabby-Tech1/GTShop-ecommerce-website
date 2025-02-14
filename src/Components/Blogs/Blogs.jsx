import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
    {
        title: "Selecting the best smartwatch",
        subtitle: "minima facere deserunt vero illo baetae delenti eius dolores consequuntur, eligendi corporis naiores molestiae laudantium, Porro?",
        published: "May 22, 2004 by GabbyTech",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "Selecting the best gadget",
        subtitle: "minima facere deserunt vero illo baetae delenti eius dolores consequuntur, eligendi corporis naiores molestiae laudantium, Porro?",
        published: "May 22, 2004 by GabbyTech",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "Selecting the best vr headset",
        subtitle: "minima facere deserunt vero illo baetae delenti eius dolores consequuntur, eligendi corporis naiores molestiae laudantium, Porro?",
        published: "May 22, 2004 by GabbyTech",
        image: Img3,
        aosDelay: "400",
    },
    
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className="container">
            <Heading title={"Recent News"} subtitle={"Explore our blogs"}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 md:gap-7 sm:gap-4'>
                {
                    BlogData.map((data) => {
                        return(
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.title} className='bg-white dark:bg-gray-900'>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={data.image} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='font-bold line-clamp-1'>{data.title}</p>
                                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400 '>{data.subtitle}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Blogs