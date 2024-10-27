import Scorecard from "./_compomponents/scorecard";

export default function Home() {
  return (
    <section className="h-full overflow-hidden flex flex-row gap-2 p-2">
      <div className="flex-grow">
        <Scorecard />
      </div>

      <div className="flex-grow">
        <Scorecard />
      </div>
    </section>
  );
}
