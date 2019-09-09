

export default class LastMayday {
  palette() {
    // console.log(1235)
    return ({
      width: '650rpx',
      height: '930rpx',
      // marginTop: '80rpx',
      background: '../../pages/images/zp.jpg',
      views: [
        // _textDecoration('overline', 0),
        // _textDecoration('underline', 1),
        // _textDecoration('line-through', 2),
        // _textDecoration('overline underline line-through', 3, 'red'),
        {
          type: 'image',
          url: '/palette/ab.png',
          css: {
            top: '640rpx',
            left: '420rpx',
            color: 'red',
            width: '200rpx',
            height: '220rpx',
          },
        },

      ],
    });
  }
}
function _textDecoration(decoration, index, color) {
  return ({
    type: 'text',
    text: decoration,
    css: [{
      top: `${startTop + index * gapSize}rpx`,
      color: color,
      textDecoration: decoration,
    }, common],
  });
}

function _image(index, rotate, borderRadius) {
  return (
    {
      type: 'image',
      url: '/palette/avatar.jpg',
      css: {
        top: `${startTop + 8.5 * gapSize}rpx`,
        left: `${startLeft + 160 * index}rpx`,
        width: '120rpx',
        height: '120rpx',
        shadow: '10rpx 10rpx 5rpx #888888',
        rotate: rotate,
        borderRadius: borderRadius,
      },
    }
  );
}

function _des(index, content) {
  const des = {
    type: 'text',
    text: content,
    css: {
      fontSize: '22rpx',
      top: `${startTop + 8.5 * gapSize + 140}rpx`,
    },
  };
  if (index === 3) {
    des.css.right = '60rpx';
  } else {
    des.css.left = `${startLeft + 120 * index + 30}rpx`;
  }
  return des;
}
