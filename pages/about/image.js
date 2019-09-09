

export default class LastMayday {
  palette() {
    console.log(1235)
    return ({
      width: '650rpx',
      height: '930rpx',
      // marginTop: '80rpx',
      background: '../../pages/images/1.jpg',
      views: [
        // _textDecoration('overline', 0),
        // _textDecoration('underline', 1),
        // _textDecoration('line-through', 2),
        // _textDecoration('overline underline line-through', 3, 'red'),
        {
          type: 'text',
          text: '周六福珠宝股份有限公司',
          css: {
            left: '25rpx',
            width: '600rpx',
            top: '80rpx',
            fontSize: '40rpx',
            textAlign: 'center',
            lineHight: '80rpx'
          },
        },
        {
          type: 'text',
          text: '校园招聘会',
          css: {
            left: '25rpx',
            width: '600rpx',
            top: '180rpx',
            fontSize: '40rpx',
            textAlign: 'center',
            lineHight: '80rpx'
          },
        },
        {
          type: 'text',
          text: '企业使命：缔造价值，传承真爱',
          css: {
            left: '25rpx',
            width: '600rpx',
            top: '300rpx',
            fontSize: '30rpx',
            color: '#666',
            textAlign: 'center',
            lineHight: '80rpx'
          },
        },
        {
          type: 'text',
          text: '价值观：诚信、责任、协作、共赢',
          css: {
            left: '25rpx',
            width: '600rpx',
            top: '360rpx',
            fontSize: '30rpx',
            color: '#666',
            textAlign: 'center',
            lineHight: '80rpx'
          },
        },
        {
          type: 'text',
          text: '经营理念：客户至上，价值为尊，互利共赢',
          css: {
            left: '25rpx',
            width: '600rpx',
            top: '420rpx',
            fontSize: '30rpx',
            color: '#666',
            textAlign: 'center',
            lineHight: '80rpx'
          },
        },
        {
          type: 'image',
          url: '/palette/ab.png',
          css: {
            top: '520rpx',
            left: '200rpx',
            color: 'red',
            width: '250rpx',
            height: '280rpx',
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
