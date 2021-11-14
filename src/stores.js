import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt. Elit pellentesque habitant morbi tristique senectus et netus et. Pellentesque nec nam aliquam sem et tortor consequat id. Eu consequat ac felis donec et odio pellentesque.'
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Pharetra pharetra massa massa ultricies mi quis. Mattis ullamcorper velit sed ullamcorper. Odio ut sem nulla pharetra diam sit amet nisl. Elementum eu facilisis sed odio.'
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum. Vitae aliquet nec ullamcorper sit. Velit dignissim sodales ut eu sem. Ultrices dui sapien eget mi proin. Suspendisse interdum consectetur libero id faucibus. Nisi porta lorem mollis aliquam.'
  }
]);