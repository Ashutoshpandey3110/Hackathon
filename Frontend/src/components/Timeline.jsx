import TimelineItem from "./TimelineItem";

const data = [
  {
    step: "Step -> 1",
    title: "Initial Assembly",
    content: "Mounting of Wheels, Arduino, Driver Shield and Motors on the chasis",
    link: "step1",
  },
  {
    step: "Step -> 2",
    title: "The big exhibition",
    content: "At Automatica 2023, we presented our entire portfolio of intelligent and cognitive robots...",
     link: "step2",
  },
  {
    step: "Step -> 3",
    title: "The future",
    content: "Uploading Code and installing Battery Pack",
    link: "step3",
  },
  {
    step: "Step -> 4",
    title: "The next level",
    content: "Uploading Code and installing Battery Pack",
    link: "step4",
  },
];

export default function Timeline() {
  return (
    <div className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-white ">Major milestones going forward</h2>
      <div className="relative">
        {data.map((item, idx) => (
          <TimelineItem key={idx} {...item} isLeft={idx % 2 === 0} />
        ))}
      </div>
    </div>
  );
}
