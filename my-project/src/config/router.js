

const  Router=[
  {
      title: 'index',
      description: 'UI列表',
      icon: 'https://os.alipayobjects.com/rmsportal/EFpWULKNsectBDK.png',
      module: require('../pages/index'),
    },
    {
      title: 'ant',
      description: 'antUI',
      icon: 'https://os.alipayobjects.com/rmsportal/EFpWULKNsectBDK.png',
      module: require('../ant'),
    },
    {
      title: 'Shoutem UI',
      description: 'shoutemUI',
      icon: 'https://os.alipayobjects.com/rmsportal/EFpWULKNsectBDK.png',
      module: require('../pages/shoutem/'),
    }

    
]

export default Router