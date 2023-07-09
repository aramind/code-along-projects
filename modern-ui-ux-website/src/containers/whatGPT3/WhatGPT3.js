import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div
      className="gpt3__whatgpt3 section__margin"
      id="wgpt3"
    >
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos voluptatibus odit quisquam, at praesentium ipsum enim ab repellat nostrum voluptas dolorem, architecto illum magnam pariatur ratione, aspernatur quod similique esse atque sequi ducimus aperiam? Eius dignissimos provident doloremque deserunt!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos voluptatibus odit quisquam!"
        />
        <Feature
          title="Knowledgebase"
          text=" architecto illum magnam pariatur ratione, aspernatur quod similique esse atque sequi ducimus aperiam? Eius dignissimos provident doloremque deserunt!"
        />
        <Feature
          title="Education"
          text="Luam, at praesentium ipsum enim ab repellat nostrum voluptas dolorem, architecto illum magnam pariatur ratione, aspernatur quod similique esse atque se"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
