"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function SlideOne() {
  return (
    <div>
        <div className="left-infos">
        <p>{"Spline permet l'import de modèle 3D mais également l'interaction avec ces dernier, l'animaton au controlle utilisateur et à la sourie"}</p>
        </div>
        <div className="right-infos">
        <p><Link href="/slideTwo">{'Next ->'}</Link></p>
        </div>
      <div className="bg">
        <Spline scene="https://prod.spline.design/pXnT4EAN-GXNFPLl/scene.splinecode" />
      </div>
    </div>
  );
}
