import { type Tag} from "@/stores/tags.ts"
//Change name to tutorials??

export interface Craft {
  craftId: number
  craftName: string
  craftMaterials: string[] //Or tags??
  craftTags: string[]
  craftIntructs?: string[]
  craftLink?:string
  craftVid?:string
  needsButton:boolean
}

export const craftList: Map<number, Craft> = new Map<number, Craft>([
  [1,
    {craftId: 1, craftName: "Build a Blanket Fort", 
    craftMaterials: ["Blankets", "Sheets", "Pillows", "Chairs", "Couch cushions"], 
    craftTags: ["indoor"],
    needsButton:false

  }],
  [2,
    { craftId: 2, craftName: "Learn Basic Calligraphy",
    craftMaterials: ["Calligraphy pen/brush pen", "Ink (if needed)", "Paper (smooth)"],
    craftTags: ["indoor", "craft","creative"],
    needsButton:true
  }],
  [3,
    { craftId: 3, craftName: "Start a Sourdough Starter",
    craftMaterials: ["Flour", "Water", "Glass jar", "Scale (optional)"],
    craftTags: ["indoor", "baking", "science"],
    craftIntructs:[
      "Step 1: Gather Materials: You need unbleached all-purpose or whole wheat flour, filtered or dechlorinated water (let tap water sit out overnight), a clean glass jar (at least 1-pint capacity), and a kitchen scale (highly recommended for accuracy) or measuring cups.",
      "Step 2: Initial Mix (Day 1): Combine equal weights of flour and water in your jar (e.g., 50g flour + 50g water, or about 1/2 cup flour + 1/4 cup water if not using a scale). Stir thoroughly until no dry flour remains. The consistency should be like thick pancake batter.",
      "Step 3: Cover & Wait: Loosely cover the jar (plastic wrap with holes, a loose lid, or a coffee filter secured with a rubber band) to allow airflow but prevent drying out. Leave it in a warm place (around 70-80°F / 21-27°C) for 24 hours.",
      "Step 4: Feeding Routine (Days 2-7+): Each day (around the same time): Discard: Remove and discard most of the starter, leaving only a small amount (e.g., keep 50g, or about 1/4 cup). Feed: Add fresh flour and water in equal weights (e.g., 50g flour + 50g water) to the portion you kept. Mix & Wait: Stir well, cover loosely, and place back in its warm spot for another 24 hours.",
      "Step 5: Observe: Look for signs of activity: bubbles, a slightly sour or yeasty smell, and an increase in volume between feedings. This can take anywhere from 5 to 14 days, sometimes longer. Be patient! If mold (pink or orange streaks) appears, discard and start over.",
      "Step 6: Maintain: Once the starter reliably doubles in volume within a few hours after feeding and smells pleasantly sour, it's active! You can now store it in the fridge and feed it less often (e.g., weekly) or keep it at room temperature and feed it daily (or twice daily if very active) if you plan to bake frequently."
    ],
    needsButton:true
    }
  ],
  [4, 
    {
      craftId: 4, craftName: "Learn Basic Crochet",
      craftMaterials: ["Yarn", "Knitting needles or Crochet hook", "Scissors"],
      craftTags: ["indoor", "craft", "art"],
      craftIntructs:[
        "Step 1: Gather Materials: Get a crochet hook (medium size like H/8 / 5mm is good for beginners), worsted weight yarn in a light color, and scissors.",
        "Step 2: Make a Slip Knot: Create an adjustable loop and place it on your hook.",
        "Step 3: Learn the Chain Stitch (ch): Practice making a foundation chain of a specific length (e.g., chain 15-20 stitches). This forms the base of your work.",
        "Step 4: Learn the Single Crochet Stitch (sc): Insert hook into the second chain from the hook, yarn over, pull up a loop (2 loops on hook), yarn over again, pull through both loops. Practice making one sc in each chain across.",
        "Step 5: Turn Work & Start New Row: At the end of the row, chain one (turning chain) and turn your work. Work a single crochet stitch into each stitch of the previous row.",
        "Step 6: Practice: Continue making rows of single crochet until you have a small square or rectangle.",
        "Step 7: Fasten Off: When finished, cut the yarn leaving a tail, yarn over, and pull the tail completely through the loop on the hook to secure it. Weave in ends with the hook or a tapestry needle."
      ],
      needsButton:true
    }
  ],
  [5,{
    craftId: 5,
    craftName: "Play Traditional Card Games",
    craftMaterials: ["Deck of cards"],
    craftTags: ["indoor", "games"],
    needsButton:false
    }
  ],
  [ 6, 
    {
      craftId: 6,
      craftName: "Rainbow Paper",
      craftMaterials: ["A bowl", "water", "Clear nail polish","Black construction paper", "Paper towels"],
      craftTags: ["indoor", "art", "science", "craft"],
      craftIntructs:["Step 1: Prepare Workspace: Cover your work surface with newspaper or paper towels, as this can be a bit messy.","Step 2: Fill Bowl with Water: Fill a shallow bowl or pan with room temperature water, about an inch or two deep.","Step 3: Add Nail Polish: Gently add ONE drop of clear nail polish onto the surface of the water. Don't stir. Observe as it quickly spreads out into a thin, shimmery film.","Step 4: Dip the Paper: Take a piece of black (or dark-colored) construction paper. Quickly but smoothly dip the paper onto the surface of the water where the polish film is. You can dip it flat or at a slight angle.","Step 5: Lift and Dry: Immediately lift the paper out of the water. The nail polish film should have transferred onto the paper, creating iridescent rainbow patterns. Lay the paper flat on your protected surface or paper towels to dry completely.","Step 6: Repeat & Experiment: You may need to clean the water surface (skim with paper towel) and add a fresh drop of polish for each new print. Experiment with different dipping techniques or adding a second drop carefully."],
      craftLink:"https://sciencekiddo.com/rainbow-paper-kid-color-science/",
      craftVid:"https://youtu.be/BFuZ8WcAwqE",
      needsButton:true
    }
  ],
  [ 7,
    {
      craftId: 7,
      craftName: "Press Flowers with an Iron",
      craftMaterials: ["Fresh flowers/leaves", "An iron", "Parchment paper", "A towel"],
      craftTags: ["indoor", "outdoor", "craft","art"],
      craftIntructs:["Step 1: Gather Materials: Collect fresh flowers or leaves (avoid overly thick or very wet ones). You will need parchment paper (not wax paper), an iron, an ironing board or heat-resistant flat surface, and a towel or plain paper."
      ,"Step 2: Prepare Flowers: Gently blot any moisture off the flowers/leaves. Trim stems if necessary."
      ,"Step 3: Prepare Iron: Empty any water from the iron. Set it to a low-to-medium heat setting with NO STEAM. Allow it to heat up."
      ,"Step 4: Create the Sandwich: Lay down a towel or sheet of plain paper on your ironing surface. Place a sheet of parchment paper on top. Arrange your flowers/leaves flat on the parchment, ensuring they don't overlap too much. Place another sheet of parchment paper over the flowers. Finally, place another sheet of plain paper or a thin towel on top."
      ,"Step 5: Press with Iron: Gently press the warm, dry iron onto the top towel/paper for about 10-15 seconds. Do not glide the iron back and forth like you're ironing clothes, just press down firmly."
      ,"Step 6: Cool and Check: Lift the iron off. Let the sandwich cool completely for a minute or two. Carefully lift the top layers and check the flowers. They should look flatter and papery."
      ,"Step 7: Repeat if Necessary: If flowers still feel moist or aren't flat enough, replace the parchment paper (it might absorb moisture) and repeat the pressing and cooling process until they are fully dry and pressed. Handle the finished flowers carefully."],
      needsButton:true,
      craftVid:"https://youtu.be/S6m47yIyqJ4"
    }],
  [ 8,
    {
        craftId: 8,
        craftName: "Make Giant Soap Bubbles",
        craftMaterials: ["Dish soap", "Water", "Sugar", "String", "Sticks or dowels", "Washer or small weight"],
        craftTags: ["outdoor", "science"],
        craftIntructs:["Step 1: Gather Materials: You'll need water (distilled is best but tap often works), liquid dish soap (Dawn Ultra is often recommended), a thickening agent (glycerin, corn syrup, or even sugar), a large clean bucket or tub, two sticks or dowels (about 1-2 feet long), cotton string, and a metal washer or small weight."
        ,`Step 2: Make the Bubble Wand: Cut two lengths of string. One should be about twice as long as the distance between the tips of your sticks when held apart; the other about 1.5 times that distance. Tie the ends of the shorter string to the tips of the two sticks. Tie the ends of the longer string to the tips as well, but slide the metal washer onto this longer string before tying the second end. This creates a triangular or V-shaped loop with a weight at the bottom.
        `,`Step 3: Mix the Bubble Solution: In the bucket, gently mix the ingredients. A common ratio is 6 cups water : 1 cup dish soap : 1/4 to 1/2 cup glycerin/corn syrup (or 1/4 cup sugar dissolved in some warm water first). Stir GENTLY – you want to dissolve the ingredients without creating a lot of foam. Let the solution sit for at least an hour, or even overnight, if possible (this often improves bubble quality).
        `,`Step 4: Dip the Wand: Submerge the string loop of your wand completely into the bubble solution. Make sure all the string is saturated.
        `,`Step 5: Lift and Create Bubbles: Slowly lift the wand out of the solution, letting excess drip off. Hold the sticks apart so the string forms its loop. Either walk backwards slowly, allowing the air to fill the bubble film, or stand still on a day with a very gentle breeze. Gently bring the stick tips together to close off the bubble.`],
        needsButton:true,
        craftLink:"https://youtu.be/bGFpuHV-iwc"
    }
  ],
  [ 9,
    {
      craftId: 9,
      craftName: "Sun Prints",
      craftMaterials: ["Construction Paper", "Tape"],
      craftTags: ["outdoor", "craft", "art", "science"],
      craftIntructs:[`Step 1: Gather Materials: You need dark-colored construction paper (blue, purple, dark green, red work well), various flat or interesting-shaped objects (leaves, flowers, ferns, paper cutouts, small flat toys, keys, beads), tape (optional), and a clear sheet of glass or acrylic (optional, but helpful).
      `,`Step 2: Find a Sunny Spot: Choose a location that will receive direct, bright sunlight for several hours without being disturbed.
      `,`Step 3: Arrange Your Design: Place a sheet of construction paper in the sunny spot. Arrange your chosen objects on top of the paper, creating a design or pattern.
      `,`Step 4: Secure the Objects: If it's windy or your objects are lightweight, you may need to secure them. You can tape the very edges of leaves down (tape will leave its own mark). Alternatively, carefully place a clean sheet of glass or clear acrylic over the entire arrangement to hold everything flat and in place. Small rocks can also weight down corners if not using glass.
      `,`Step 5: Expose to Sun: Leave the paper and objects undisturbed in the direct sunlight. The time needed varies greatly depending on the sun's intensity and the paper quality - typically 2 to 5 hours. You should see the exposed paper visibly lightening (fading).
      `,`Step 6: Reveal the Print: Once the paper has noticeably faded, carefully remove the glass/weights/tape and the objects. The areas covered by the objects will have retained the paper's original darker color, creating silhouette prints.`],
      needsButton:true,
      craftVid:"https://youtu.be/6CQ6x8zpX30"
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