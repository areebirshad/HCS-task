import { ReduxActionTypes } from "../../constants/constant";
const initailState = {
  ListData: [
    {
      id: 1,
      name: "Chicken DumpStick",
    },
    {
      id: 2,
      name: "Chicken DumpStick",
    },
    {
      id: 3,
      name: "Chicken DumpStick",
    },
    {
      id: 4,
      name: "Chicken DumpStick",
    },
    {
      id: 5,
      name: "Chicken DumpStick",
    },
    {
      id: 6,
      name: "Chicken DumpStick",
    },
  ],
  checkData: [
    {
      id: 1,
      name: "Kitchen Lipsum",
    },
    {
      id: 2,
      name: "Kitchen Dummy",
    },
    {
      id: 3,
      name: "Kitchen Dummy",
    },
    {
      id: 4,
      name: "Kitchen Dummy",
    },
    {
      id: 5,
      name: "Kitchen Dummy",
    },
  ],
  data: [
    {
      imgUrl:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/0/FN_Neely-BBQ-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371597359867.jpeg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://www.lecremedelacrumb.com/wp-content/uploads/2019/05/best-easy-grilled-chicken-2.jpg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://content-prod.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/16376/spicybarbequechickendrumsticks.jpg?v=1&mode=crop&width=800&height=640&upscale=false",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://www.wholesomeyum.com/wp-content/uploads/2019/10/wholesomeyum-easy-crispy-baked-chicken-legs-drumsticks-recipe-8.jpg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://www.thespruceeats.com/thmb/NuK3sGch-h5EV0z283QrjV2A08o=/1500x844/smart/filters:no_upscale()/terris-crispy-fried-chicken-legs-3056879-10_preview-5b05ec40a474be00362260d7.jpeg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://www.masala.tv/wp-content/uploads/2017/11/1-3-300x160.jpg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://ohsweetbasil.com/wp-content/uploads/quick-grilled-chicken-with-oregano-recipe-13.jpg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://diethood.com/wp-content/uploads/2018/06/Grilled-Chicken-Thighs-Recipe.jpg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://www.happyfoodstube.com/wp-content/uploads/2019/07/grilled-boneless-chicken-thighs-picture.jpg",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbn4C6t-ec7u-j2IrYVrHD5fRehPhatCvubQ&usqp=CAU",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQogffyOR994knT87UMqw7Wlw2Cg2_M2dxbjA&usqp=CAU",
      title: "Next Month",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtwSUQ2Zzj3ctjXtbyDja8kwv3hNOJQ3BE9w&usqp=CAU",
      title: "Next Month",
    },
  ],
};

export default (state = initailState, action = {}) => {
  switch (action.type) {
    case ReduxActionTypes.GET_ALL_DATA:
      debugger;
      return [...state.data];

    default:
      return state;
  }
};
