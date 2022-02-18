import { DistrictCard } from 'components';
import { COLOR, SCREEN } from 'constants/ui';
import { LoadingActions, selectLoading } from 'hooks/loading/LoadingSlice';
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text
} from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, InteractionManager } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from 'redux/hooks';
import { IDistrict } from 'types';

interface Props {
  navigation: any;
}
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
const data2: IDistrict[] = [
  {
    title: 'Quận 12',
    imgUrl:
      'http://channel.vcmedia.vn/prupload/270/2018/12/img_201812150933239359.jpg',
    description:
      'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
  },
  {
    title: 'Huyện Bình Chánh',
    imgUrl:
      'https://cdn.webcool.vn/cafedautu.vn/files/dungna1605/2021/03/19/huyen-binh-chanh-170816.jpg',
    description:
      'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
  },
  {
    title: 'Huyện Cần Giờ',
    imgUrl:
      'https://vcdn-vnexpress.vnecdn.net/2021/09/12/thi-tran-can-thanh-9647-161408-1737-2562-1631433093.jpg',
    description:
      'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
  },
  {
    title: 'Huyện Củ Chi',
    imgUrl:
      'https://liengtam.com/wp-content/uploads/2021/08/3-huyen-cu-chi-co-dien-tich-rong-va-dan-so-lon.jpg',
    description:
      'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
  },
  {
    title: 'Huyện Hóc Môn',
    imgUrl:
      'https://img.dothi.net/2020/09/30/Z9BcC3fq/keu-goi-dau-tu-23-du-an-hoc-mon-d2d3.jpg',
    description:
      'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
  },
  {
    title: 'Huyện Nhà Bè',
    imgUrl:
      'https://liengtam.com/wp-content/uploads/2021/08/3-huyen-nha-be-co-dien-tich-va-dan-so-lon.jpg',
    description:
      'Maecenas fermentum aliquam tellus, id mollis orci rutrum ut.',
  },
];
export const Home = (props: Props) => {
  const {navigation} = props;
  const district1 = useRef(data);
  const district2 = useRef(data2);
  
  // const [isLoading, setisLoading] = useState(true);
  const isLoading = useAppSelector(state => state.loading.loading)
  
   
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      // ...long-running synchronous task...
      LoadingActions.setIsLoadingSreensSuccess();
    });
    console.log(isLoading)
  }, [isLoading]);
  
  

  if(isLoading) return (<Center><Text>Is Loading ... </Text></Center>)
  else
  return (
    <ScrollView>
      <Box bg="#EEEEEE">
        <HStack w="100%" backgroundColor={COLOR.MAIN_COLOR}>
          <Box w="100%" style={{alignItems: 'center'}}>
            <IconButton
              onPress={() => navigation.navigate('search-home')}
              icon={
                <Icon
                  size="sm"
                  as={<VectorIcon name={'search'} />}
                  color="white"
                />
              }
            />
          </Box>
        </HStack>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/panorama-view-ho-chi-minh-city-vietname-with-temple-city-skyline-with-world-famous-landmarks-paper-cut-style-vector-illustration_41327-1141.jpg?size=626&ext=jpg',
          }}
          style={{
            width: SCREEN.WIDTH,
            height: SCREEN.HEIGHT / 5,
          }}
        />

        <Box bg="white" mt={2}>
          <Text px={5} mt={3} bold>
            Nội thành:{' '}
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={district1.current}
            renderItem={item => (
              <DistrictCard value={item} navigation={navigation} />
            )}
            keyExtractor={item => item.title + ''}
          />
        </Box>

        <Box bg="white" mt={2} mb={2}>
          <Text px={5} mt={3} bold>
            Ngoại thành:{' '}
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={district2.current}
            renderItem={item => (
              <DistrictCard value={item} navigation={navigation} />
            )}
            keyExtractor={item => item.title + ''}
          />
        </Box>
        <Box bg="white" mt={2} mb={2}>
          <Text px={5} mt={3} bold>
            Đề xuất cho bạn :{' '}
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data2}
            renderItem={item => (
              <DistrictCard value={item} navigation={navigation} />
            )}
            keyExtractor={item => item.title + ''}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

