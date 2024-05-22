"use client";

import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Slidethree() {
    return (
      <div>
        <div className="left-infos">
        <p>{"Intégration supportée pour:"}</p>
        <ul>
            <li>- vanilla js</li>
            <li>- React</li>
            <li>- Three Js</li>
            <li>- Ios (swift)</li>
            <li>- vision OS</li>
        </ul>
        </div>
        <div className="right-infos">
        <p><Link href="/slideFour">{'Next ->'}</Link></p>
        </div>
          <div className="bg">
          <Spline scene="https://prod.spline.design/2p-2y1YZT-MxRuyf/scene.splinecode" />
      </div>
      </div>
    );
  }