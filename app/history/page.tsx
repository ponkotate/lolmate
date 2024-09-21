import Dashboard from '@/components/templates/dashboard';

export default function Page() {
  return (
    <Dashboard>
      <div className="w-full p-8">
        <Cassette />
      </div>
    </Dashboard>
  );
}

type Summoner = {
  name: string;
};

const Cassette = () => (
  <div className="flex flex-row items-center justify-between rounded-xl bg-white p-4 shadow">
    <div className="flex flex-col">
      <Summoner name="blue1" />
      <Summoner name="blue2" />
      <Summoner name="blue3" />
      <Summoner name="blue4" />
      <Summoner name="blue5" />
    </div>
    <div>
      <div className="h-24 w-24 rounded-full bg-blue-300 p-2">blue win</div>
    </div>
    <div className="flex flex-col">
      <Summoner name="red1" />
      <Summoner name="red2" />
      <Summoner name="red3" />
      <Summoner name="red4" />
      <Summoner name="red5" />
    </div>
  </div>
);

const Summoner = ({ name }: Summoner) => (
  <div className="flex flex-row items-center gap-2">
    <div className="h-4 w-4 bg-green-500">i</div>
    <div>
      <span>{name}</span>
    </div>
  </div>
);
