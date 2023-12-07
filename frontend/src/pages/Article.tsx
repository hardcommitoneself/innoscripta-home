import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "components";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = {
    id: 1,
    imgUrl: "https://picsum.photos/id/237/200/300",
    title: "The overlooked benefits of real Christmas trees",
    description:
      "Elon Musk shows off updates to his brain chips and says he’s going to install one in himself when they are ready",
    author: "Joana Marie Jones",
    source: "Green",
    category: "Environment",
    publishedAt: "2023-12-01",
    authorImgUrl:
      "https://lh3.googleusercontent.com/ogw/ANLem4bCwipsQhDTGH4i2Z1fem9_LX728mAYxir4vtve=s32-c-mo",
    content: `Elon Musk shows off updates to his brain chips and says he’s going to install one in himself when they are readyElon Musk’s health tech venture Neuralink shared updates to its brain-implant technology during a “show and tell” recruitment event Wednesday night. Musk said during the event that he plans to get one of the implants himself.

    Musk said two of the company’s applications will aim to restore vision, even for people who were born blind, and a third application will focus on the motor cortex, restoring “full body functionality” for people with severed spinal cords. “We’re confident there are no physical limitations to restoring full body functionality,” Musk said.
    
    Neuralink could begin to test the motor cortex technology in humans in as soon as six months, Musk said.
    
    “Obviously, we want to be extremely careful and certain that it will work well before putting a device in a human, but we’re submitted, I think, most of our paperwork to the FDA,” he said.
    
    Musk also said he plans to get one himself. “You could have a Neuralink device implanted right now and you wouldn’t even know. I mean, hypothetically ... In fact, in one of these demos, I will,” he said. He reiterated that on Twitter after the event.
    
    Since none of Neuralink’s devices have been tested on humans or approved by the FDA, Wednesday’s announcements warrant skepticism, said Xing Chen, assistant professor in the Department of Ophthalmology at the University of Pittsburgh School of Medicine.
    
    “Neuralink is a company [that] doesn’t have to answer to shareholders,” she told CNBC. “I don’t know how much oversight is involved, but I think it’s very important for the public to always keep in mind that before anything has been approved by the FDA, or any governmental regulatory body, all claims need to be very, very skeptically examined.”
    
    Neuralink was founded in 2016 by Musk and a group of other scientists and engineers. It strives to develop brain-computer interfaces, or BCIs, that connect the human brain to computers that can decipher neural signals.
    Musk invested tens of millions of his personal wealth into the company and has said, without evidence, that Neuralink’s devices could enable “superhuman cognition,” enable paralyzed people to operate smartphones or robotic limbs with their minds someday, and “solve” autism and schizophrenia.
    The company’s presentation Wednesday echoed these lofty ambitions, as Musk claimed that “as miraculous as it may sound, we’re confident that it is possible to restore full body functionality to someone who has a severed spinal cord.”`,
  };

  return (
    <div className="mx-auto max-w-5xl flex flex-col py-10">
      {/* header */}
      <div className="flex items-center justify-between">
        {/* Author */}
        <div className="flex items-center gap-1">
          {/* avatar */}
          <img
            src={article.authorImgUrl}
            className="w-8 h-8 rounded-full overflow-hidden border-[3px] border-primary"
          />

          <span className="text-2xl font-medium">{article.author}</span>
        </div>

        {/* Back */}
        <Button>
          <Link to="/" className="flex items-center gap-1">
            <ChevronLeftIcon className="w-4 h-4" /> <span>Back</span>
          </Link>
        </Button>
      </div>

      {/* Description */}
      <p className="font-bold text-5xl my-10">{article.description}</p>

      {/* published date & image */}
      <div className="flex flex-col gap-4">
        <span className="text-gray-500">
          PUBLISHED AT{" "}
          {moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss A")}
        </span>

        <img
          src={article.imgUrl}
          className="aspect-[2/1] object-cover rounded-2xl"
        />
      </div>

      {/* content */}
      <p className="p-20 text-lg text-justify">{article.content}</p>
    </div>
  );
};
