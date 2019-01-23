
const initialComments =
      [
        {
          "id": "asdf",
          "postId": "aaaa",
          "userPic": "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Man-16-icon.png",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique luctus enim, sed elementum neque venenatis in. Nullam lobortis ex a lectus blandit malesuada. Nam ac felis id dolor pharetra rutrum. Cras vitae fermentum ex. Vivamus aliquam egestas orci, sed porttitor nisi malesuada rutrum."
        },
        {
          "id": "qwer",
          "postId": "aaaa",
          "userPic": "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Boss-5-icon.png",
          "text": "Maecenas eu sagittis tellus. Nam facilisis felis quis tellus eleifend congue. Aliquam feugiat velit leo, vitae faucibus arcu eleifend a. Proin in odio erat. Pellentesque vel justo malesuada ante pulvinar malesuada a quis lorem. Donec magna dui, egestas eu tincidunt vel, lacinia cursus nibh. Integer non nulla eget diam varius rhoncus nec at tellus. Nam porttitor condimentum diam, eu porta mauris finibus eget."
        },
        {
          "id": "zxcv",
          "postId": "bbbb",
          "userPic": "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Woman-9-icon.png",
          "text": "Suspendisse at erat tincidunt nunc euismod lobortis et et urna. Ut nulla tellus, eleifend vitae ultrices nec, fringilla et ex. Integer a odio eu velit dignissim ullamcorper. Praesent nec laoreet turpis, ut efficitur felis. Donec sodales sit amet tellus nec dictum. Donec quis sollicitudin nisi. Vivamus risus ex, rutrum eu venenatis id, egestas eu mi. Aliquam massa ligula, scelerisque vel nisl non, venenatis fringilla dui. Suspendisse vitae tincidunt mi. Morbi congue, tellus in fermentum ornare, elit justo ultrices lorem, eget bibendum nunc enim a lorem. Cras hendrerit non ipsum non fermentum. Nunc bibendum turpis mauris, vitae malesuada lorem posuere in. Mauris congue purus nulla, non pharetra lectus venenatis at. Fusce ultricies lobortis purus eu gravida. Proin pellentesque nec ante eget euismod. Nullam ultrices quis nisi sit amet porttitor."
        }
      ]

const comment = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: action.id,
        text: action.text,
        postId: action.currPostId,
        userPic: "https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"
      }
    default:
      return state
  }
}

const comments = (state = initialComments, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        comment(undefined, action)
      ]
    default:
      return state
  }
}

export default comments