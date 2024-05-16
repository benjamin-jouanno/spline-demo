"use client";
import Spline from "@splinetool/react-spline";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="content">
        <h1 className="title">SPLINE X HUGE FRONT <p className="start"><Link href="/slideOne">{'Start ->'}</Link></p></h1>
      </div>
      <div className="bg">
        <Spline scene="https://prod.spline.design/QF1J3Lj-IDFqPrQY/scene.splinecode" />
      </div>
    </div>
  );
}
