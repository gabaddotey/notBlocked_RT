import { type Tag} from "@/stores/tags.ts"
//Change name to tutorials??
export interface Craft {
  craftId: number
  craftName: string
  craftMaterials: string[] //Or tags??
  craftTags: string[]
}

export const craftList: Map<number, Craft> = new Map<number, Craft>([
  [1,
    {craftId: 1, craftName: "Build a Blanket Fort", 
    craftMaterials: ["Blankets", "Sheets", "Pillows", "Chairs", "Couch cushions"], 
    craftTags: ["indoor"]
  }],
  [2,
    { craftId: 2, craftName: "Learn Basic Calligraphy",
    craftMaterials: ["Calligraphy pen/brush pen", "Ink (if needed)", "Paper (smooth)"],
    craftTags: ["indoor", "craft","creative"]
    //embed yt vids
  }],
  [3,
    { craftId: 3, craftName: "Start a Sourdough Starter",
    craftMaterials: ["Flour", "Water", "Glass jar", "Scale (optional)"],
    craftTags: ["indoor", "baking", "science"]
    }
  ],
  [4, 
    {
      craftId: 4, craftName: "Learn Basic Knitting or Crochet",
      craftMaterials: ["Yarn", "Knitting needles or Crochet hook", "Scissors"],
      craftTags: ["indoor", "craft", "art"]
    }
  ],
  [5,{
    craftId: 5,
    craftName: "Play Traditional Card Games",
    craftMaterials: ["Deck of cards"],
    craftTags: ["indoor", "games"]
    }
  ],
  [ 6, 
    {
      craftId: 6,
      craftName: "Rainbow Paper",
      craftMaterials: ["A bowl", "water", "Clear nail polish","Black construction paper", "Paper towels"],
      craftTags: ["indoor", "art", "science", "craft"]
      //https://sciencekiddo.com/rainbow-paper-kid-color-science/
      //https://youtu.be/BFuZ8WcAwqE
    }
  ],
  [ 7,
    {
      craftId: 7,
      craftName: "Press Flowers with an Iron",
      craftMaterials: ["Fresh flowers/leaves", "An iron", "Parchment paper", "A towel"],
      craftTags: ["indoor", "outdoor", "craft","art"]
      //https://youtu.be/S6m47yIyqJ4
    }
  ],
  [ 8,
    {
        craftId: 8,
        craftName: "Make Giant Soap Bubbles",
        craftMaterials: ["Dish soap", "Water", "Sugar", "String", "Sticks or dowels", "Washer or small weight"],
        craftTags: ["outdoor", "science"]
        //https://youtu.be/bGFpuHV-iwc
    }
  ],
  [ 9,
    {
      craftId: 9,
      craftName: "Sun Prints",
      craftMaterials: ["Construction Paper", "Tape"],
      craftTags: ["outdoor", "craft", "art", "science"]
      //https://youtu.be/6CQ6x8zpX30
    }
  ]
])

//Testing how I can extract the name of the tag w/o the entire object
// const excraft = getCraft(1)?.craftTags[0]
// var TheName = Object.keys(excraft!)
// console.log(excraft)
// console.log("Should say tag name: "+ TheName)

function getCraftList(): Map<number, Craft> {
  return craftList
}

function getCraft(craftId: number): Craft | undefined {
  const craft = craftList.get(craftId)
  // console.log(`ID: ${question.id} title: ${question.craftName}`)
  return craft
}

export { getCraftList, getCraft }