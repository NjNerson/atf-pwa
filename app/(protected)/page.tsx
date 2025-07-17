import DashboardBanner from "@/components/DashboardBanner";
import PageLayout from "@/components/layout/PageLayout";
import ComingChampList from "@/components/ComingChampList";
import ComingChampListItem from "@/components/ComingChampListItem";

export default function Home() {
  const comingChamps = [
    {
      id: 1,
      name: "Championnat Régional Fianarantsoa",
      date: "15/08/2025",
      place: "Fianarantsoa",
    },
    {
      id: 2,
      name: "Coupe Nationale Taekwondo",
      date: "10/09/2025",
      place: "Antananarivo",
    },
    {
      id: 3,
      name: "Open de Tamatave",
      date: "05/10/2025",
      place: "Toamasina",
    },
  ];

  return (
    <PageLayout className="flex flex-col gap-4">
      <DashboardBanner />
      <ComingChampList>
        {comingChamps &&
          comingChamps.map((champ, idChamp) => (
            <div key={champ.id}>
              <ComingChampListItem
                name={champ.name}
                place={champ.place}
                date={champ.date}
                id={champ.id}
              />
              {idChamp !== comingChamps.length - 1 && <hr className="py-.5" />}{" "}
            </div>
          ))}
      </ComingChampList>
    </PageLayout>
  );
}
