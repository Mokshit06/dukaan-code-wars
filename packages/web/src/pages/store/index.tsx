import {
  Box,
  Button,
  CSSObject,
  Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';

const selectedStyle: CSSObject = {
  bg: 'white',
  borderRightColor: 'transparent',
  borderLeft: '2px solid',
  borderLeftColor: 'gray.600',
};
const tabProps: TabProps = {
  borderBottom: '1px solid',
  bg: 'gray.50',
  borderRight: '1px solid white',
  borderColor: 'gray.200',
  margin: '0 -1px',
  width: '13rem',
  _selected: selectedStyle,
  _focus: { boxShadow: 'none !important' },
};

export default function Store() {
  return (
    <Flex flex={1} width="full" alignItems="center" justifyContent="center">
      <Head>
        <title>Store</title>
      </Head>
      <Box
        width="full"
        maxWidth={{ md: '45rem' }}
        rounded="md"
        textAlign="center"
        boxShadow="xs"
      >
        <Box p="5">
          <Heading as="h2" fontWeight="400">
            Start your own business!
          </Heading>
        </Box>
        <Divider />
        <Tabs orientation="vertical" variant="unstyled" size="lg">
          <TabList
            margin="0 0 0 1px"
            borderRight="1px solid"
            borderColor="gray.200"
          >
            <Tab {...tabProps}>Add product</Tab>
            <Tab {...tabProps}>Customise theme</Tab>
          </TabList>
          <TabPanels width="100%" textAlign="left">
            <TabPanel minHeight="16rem" maxWidth="25rem" padding="1.5rem 2rem">
              <Text as="h3" mb="8px" fontSize="lg" fontWeight="500">
                Add your first product
              </Text>
              <Text>Add the first product in your new store.</Text>
              <Button my="1.5rem">Add first product</Button>
            </TabPanel>
            <TabPanel minHeight="16rem" maxWidth="25rem" padding="1.5rem 2rem">
              <Text as="h3" mb="8px" fontSize="lg" fontWeight="500">
                Edit the look and feel of your online store
              </Text>
              <Text>
                Choose a theme and add your logo, colors, and images to reflect
                your brand.
              </Text>
              <Button my="1.5rem">Customize theme</Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}