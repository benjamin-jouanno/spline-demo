"use client";

import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function SlideTwo() {
    return (
      <div>
        <div className="content-title">
        <p>{"Il est également possible d'intéragir avec le clavier."}</p>
        <div className="next"><Link href="/slideThree">{'Next ->'}</Link></div>
        </div>
          <div className="bg">  
          <Spline scene="https://prod.spline.design/Q2clr2N8SztWuMkA/scene.splinecode" />
      </div>
      </div>
    );
  }