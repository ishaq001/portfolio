import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from "@/data"

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            img,
            className,
            title,
            titleClassName,
            description,
            imgClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              titleClassName={titleClassName}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid
