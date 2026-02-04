import { StackedImageHover } from "@/components/ui/hover-deck-fx";

export default function DemoOne() {
    const money = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg";

  return (
    <div >
      <StackedImageHover
        images={[money, money, money, money]}        
      />
    </div>
  );;
}
