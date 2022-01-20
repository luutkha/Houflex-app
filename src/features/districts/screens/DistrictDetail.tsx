import { RoomCard } from 'components/card/RoomCard';
import { SCREEN } from 'constants/ui';
import { Box, Center, ScrollView, Text } from 'native-base';
import React from 'react';
import { FlatList, Image } from 'react-native';
import { IDistrict } from 'types';
interface Props {
  route: any;
  navigation: any;
}
export const DistrictDetail = (props: Props) => {
  const {route, navigation} = props;
  const {district} = route.params;
  const data: IDistrict[] = [
    {
      title: 'Quận 1',
      imgUrl:
        'https://images.unsplash.com/photo-1586004551686-d9c4fab26471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 3',
      imgUrl:
        'https://cdn.vietnammoi.vn/171464242508312576/2021/6/25/dich-vu-tham-tu-tai-quan-3-sai-gon-chuyen-nghiep-16246290120771854308365.jpeg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 4',
      imgUrl:
        'https://file4.batdongsan.com.vn/2021/06/17/JGcIp0rf/20210617212626-1a5f.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 5',
      imgUrl:
        'https://top10tphcm.com/wp-content/uploads/2020/11/cac-tuyen-duong-tai-quan-5-tphcm.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 6  ',
      imgUrl:
        'https://3.bp.blogspot.com/-4FT4X4v7H0M/VwFFtvVouRI/AAAAAAAAAMo/9As_svQ18NgHtiiOdLqTYyPX-NSOe3YFQ/s1600/cho-dau-moi-binh-tay.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 7',
      imgUrl: 'https://media.loveitopcdn.com/1086/1-12-e1505536237895.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 8',
      imgUrl:
        'https://cdn.thongtinduan.com/uploads/posts/2021-06/phan-tich-loi-the-va-han-che-khi-mua-chung-cu-quan-8-2.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 10',
      imgUrl:
        'https://afamilycdn.com/k:NuDtl90AyfgmPfKAOzOfhv4jN7VDVP/Image/2015/04/Ngam-Sai-Gon-hien-dai-tu-tren-cao_14-b5733/su-hien-dai-cua-sai-gon-nhin-tu-tren-cao14-.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận 11',
      imgUrl:
        'https://vnd.vietnamdrive.com/wp-content/uploads/2020/08/dam-sen-park.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },

    {
      title: 'Quận Bình Tân',
      imgUrl:
        'https://media.moitruongvadothi.vn/2018/12/02/9826/1543731822-tphcm-quan-tan-phu-va-binh-tan-ky-niem-15-nam-thanh-lap.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận Bình Thạnh',
      imgUrl:
        'https://batdongsanhungthinh.com.vn/wp-content/uploads/2018/04/capitaland-quan-binh-thanh-4.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận Gò Vấp',
      imgUrl:
        'https://muadatbannha.com/wp-content/uploads/2018/10/img-5580f82677871.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận Phú Nhuận',
      imgUrl:
        'https://kyguinhadat.com/wp-content/uploads/2020/01/nha-dat-quan-phu-nhuan.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận Tân Bình',
      imgUrl:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
    {
      title: 'Quận Tân Phú',
      imgUrl:
        'https://charmington.org/public/upload/tin-ich-d-an-tan-phu-1_1449417443.jpg',
      description:
        'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
    },
  ];
  return (
    <ScrollView>
      {/* <Center>{district.item.title}</Center> */}
      <Box>
        <Image
          source={{
            uri: district.item.imgUrl,
          }}
          style={{
            width: SCREEN.WIDTH,
            height: SCREEN.HEIGHT / 3,
          }}
        />
      </Box>

      <Box mt={-10}  borderTopRadius={20} bg="#FFFFFF" h={5}></Box>
      <Box bg="#FFFFFF">
        <Center>
          <Text bold>{district.item.title}</Text>
          {/* <Text >{district.item.description}</Text> */}
        </Center>
        <FlatList
          data={data}
          renderItem={item => <RoomCard value={item} navigation={navigation} />}
          keyExtractor={item => item.title + ''}
        />
      </Box>
     </ScrollView>
  );
};
