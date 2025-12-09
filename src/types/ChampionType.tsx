export type Champion = () =>{
  id: string;
  name: string;
  title: string;
  blurb: string;
  lore:string;
  passive: {
    name: string;
    description: string;
  };
}