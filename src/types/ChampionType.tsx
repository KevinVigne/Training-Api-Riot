export type Champion = {
  id: string;
  name: string;
  title: string;
  blurb: string;
  lore:string;
  tooltip:string;
  rangeBurn:string;

  passive: {
    name: string;
    description: string;
    image:{
      full:string;
      sprite:string;
      x:number;
      y:number;
      w:number;
      h:number;
    }
  };

  image:{
    full:string;
    sprite:string;
    x:number;
    y:number;
    w:number;
    h:number;
  }

  stats:{
    hp:number;
    mp:number;
    movespeed:number;
    armor:number;
    spellblock:number;
    attackrange:number;
    hpregen:number;
    mpregen:number;
    crit:number;
    attackdamage:number;
    attackspeed:number;
  }
  
  info:{
    attack:number;
    defense:number;
    magic:number;
    difficulty:number;
  }

  spells:{
    id:string;
    name:string;
    description:string;
    cooldownBurn:string;
    costBurn:string;
    image:{
      full:string;
      sprite:string;
      x:number;
      y:number;
      w:number;
      h:number;
    }
  }[];
}