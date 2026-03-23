import { QuartzComponent, QuartzComponentConstructor } from "../../quartz/components/types"

const GardenDisclaimer: QuartzComponent = () => {
  return (
    <div>
      <p>
        <b>Hi, my name is Philip 👋.</b> This is my digital garden for deliberate study about data
        science and AI. If you find any issues or have feedback, find me at my{" "}
        <a href="https://heltweg.org">personal page</a> or{" "}
        <a href="https://isselthal.industries">work with me here</a>.
      </p>
    </div>
  )
}

export default (() => GardenDisclaimer) satisfies QuartzComponentConstructor
