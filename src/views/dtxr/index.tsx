import { useState, useCallback, useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import ComTable from '../../components/ComTable';
import { Button, Modal, TreeSelect } from 'antd';
import useStyle from './style';
//    const fields =
interface KeyVal {
  [key: string]: string | number;
}
       const datas = {
         tableRows: [
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ8',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 9,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ10',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 11,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ9',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 10,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ6',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 7,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ13',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 15,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ1',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 2,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ5',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 6,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCGQSD-2标',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 1,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ11二公局',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 12,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ4',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 5,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ7',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 8,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ3',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 4,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCGQSD-1标',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 0,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ11中铁大桥局',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 13,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ12',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 14,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           },
           {
             '034a3a6e307518a275436e5329adf501': 0,
             '62f3b4e26c26910f600c05c1d0ea8f71': 0,
             be01fb3f99962a1260c84f145e889c63: 0,
             '58e0fb043e656295ce7d6ff2d92b12fa': 0,
             '8af240a60f897e13f2368195baac430d': 5487.85,
             '73dd97fe9cf21a5601aa4b10fb8d5833': 0,
             '8ad60e5a023792cb27027d4b7f80f52d': 1.02,
             '89aba50d88cb222f2a58616dad47c201': 0,
             dd7935f41346ee015f6b0d7747ab41a7: 7715.55,
             e9e97825b9ce8172802240d3afdae74c: 0,
             e8b9267f2ba8319bb8e6aa1643cb2e51: 6866.9,
             '69526e29d160742e3045349add3df6cd': 'XCTJ2',
             '0dc1e883dd793ba7d2847de1c6b18105': 0,
             '91309e402f56a83eec4153f5266ef338': 1914.37,
             '27900c59ada01f23666bb85a8495ccf2': 0,
             '6e4b3752f83aa94d5a2cf636ea4dce0f': 0,
             '0efe0fa185c4ed675fea238ca5807aa9': 6810.59,
             a663b59473a29f80ed321f3bc3922c96: 1847.6,
             '7767ec6767d9e55bf1236b6b5f5c3cde': 3424.35,
             '08be362828ec67997027c0b2372f49bb': 3104.36,
             '62c73ca0ed6bd388d06f20075130b8c0': 3074.55,
             '28c3f1211a8ce05dec41f0bcf1a844cf': 0,
             '891250e7e82b1be8e4877ebabbe3e09b': 2092.17,
             '17a632924d97ccb325d4bf412aeb089b': 3422.39,
             '3c39e4c37fd3a1def7fdfb6c2462ce24': 0,
             '1144dcd3a14233f4a01c212380060f28': 1893.58,
             '299157397d8a1378c0ac752ce9fed8aa': 1.49,
             '8ad4458bf581aa31500c5aa0a93cbb4f': 0,
             '6ced3056cfbc18001ea08f04f93eda4b': 0,
             '698ab8cce51de752087872ed6ce5aced': 3651.19,
             c946cb103ac17dcfe2bd58d06fa0386e: 0,
             '55490f2e5cda3fb40e1314d41353440c': 0,
             '2c288bfb88e3010faf633853ab68517b': 0,
             '43a42dedd92e0a08597056c4b493f52c': 4636.78,
             cf288927a17be1e79f723da13ddd1f83: 0,
             b7c544d469f55c24194f5a3231542372: 3,
             '537e2d344a6255c2b9fa19d78b22e35c': 1.09,
             ded9bd90b15a88b363f3769cb534336f: 3720.18
           }
         ],
         series: [
           {
             name: '一月计划完成',
             chartType: null,
             data: [
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               },
               {
                 value: 1847.6
               }
             ]
           },
           {
             name: '一月实际完成',
             chartType: null,
             data: [
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               },
               {
                 value: 1893.58
               }
             ]
           },
           {
             name: '一月完成百分比',
             chartType: null,
             data: [
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               },
               {
                 value: 1.02
               }
             ]
           },
           {
             name: '二月计划完成',
             chartType: null,
             data: [
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               },
               {
                 value: 1914.37
               }
             ]
           },
           {
             name: '二月实际完成',
             chartType: null,
             data: [
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               },
               {
                 value: 2092.17
               }
             ]
           },
           {
             name: '二月完成百分比',
             chartType: null,
             data: [
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               },
               {
                 value: 1.09
               }
             ]
           },
           {
             name: '三月计划完成',
             chartType: null,
             data: [
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               },
               {
                 value: 3104.36
               }
             ]
           },
           {
             name: '三月实际完成',
             chartType: null,
             data: [
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               },
               {
                 value: 4636.78
               }
             ]
           },
           {
             name: '三月完成百分比',
             chartType: null,
             data: [
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               },
               {
                 value: 1.49
               }
             ]
           },
           {
             name: '四月计划完成',
             chartType: null,
             data: [
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               },
               {
                 value: 3651.19
               }
             ]
           },
           {
             name: '四月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '四月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '五月计划完成',
             chartType: null,
             data: [
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               },
               {
                 value: 3074.55
               }
             ]
           },
           {
             name: '五月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '五月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '六月计划完成',
             chartType: null,
             data: [
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               },
               {
                 value: 3424.35
               }
             ]
           },
           {
             name: '六月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '六月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '七月计划完成',
             chartType: null,
             data: [
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               },
               {
                 value: 3422.39
               }
             ]
           },
           {
             name: '七月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '七月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '八月计划完成',
             chartType: null,
             data: [
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               },
               {
                 value: 3720.18
               }
             ]
           },
           {
             name: '八月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '八月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '九月计划完成',
             chartType: null,
             data: [
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               },
               {
                 value: 5487.85
               }
             ]
           },
           {
             name: '九月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '九月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '十月计划完成',
             chartType: null,
             data: [
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               },
               {
                 value: 7715.55
               }
             ]
           },
           {
             name: '十月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '十月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '十一月计划完成',
             chartType: null,
             data: [
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               },
               {
                 value: 6866.9
               }
             ]
           },
           {
             name: '十一月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '十一月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '十二月计划完成',
             chartType: null,
             data: [
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               },
               {
                 value: 6810.59
               }
             ]
           },
           {
             name: '十二月实际完成',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           },
           {
             name: '十二月完成百分比',
             chartType: null,
             data: [
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               },
               {
                 value: 0
               }
             ]
           }
         ]
       };



interface treeDataType {
  value: string;
  title: string;
  children?: treeDataType[];
}

// 原材抽检数据

const sss = { 标段名称: 'dddddd', 抽检批次: 'bbbbb', 合格批次: 'ccccc' };

const axios = new Promise((reslove) => {
  setTimeout(() => {
    reslove( [
     {
       id: 'b7c544d469f55c24194f5a3231542372',
       name: '数据id',
       originName: '数据id',
       type: 'number',
       originType: 'LONG',
       category: 'qua',
       columnIndex: 0,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '865dfa2827281319279034c00c44c509',
       name: '年份',
       originName: '年份',
       type: 'number',
       originType: 'LONG',
       category: 'qua',
       columnIndex: 1,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '69526e29d160742e3045349add3df6cd',
       name: '标段名称',
       originName: '标段名称',
       type: 'text',
       originType: 'TEXT',
       category: 'dim',
       columnIndex: 2,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'a663b59473a29f80ed321f3bc3922c96',
       name: '一月计划完成',
       originName: '一月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 3,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '1144dcd3a14233f4a01c212380060f28',
       name: '一月实际完成',
       originName: '一月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 4,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '8ad60e5a023792cb27027d4b7f80f52d',
       name: '一月完成百分比',
       originName: '一月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 5,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '91309e402f56a83eec4153f5266ef338',
       name: '二月计划完成',
       originName: '二月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 6,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '891250e7e82b1be8e4877ebabbe3e09b',
       name: '二月实际完成',
       originName: '二月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 7,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '537e2d344a6255c2b9fa19d78b22e35c',
       name: '二月完成百分比',
       originName: '二月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 8,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '08be362828ec67997027c0b2372f49bb',
       name: '三月计划完成',
       originName: '三月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 9,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '43a42dedd92e0a08597056c4b493f52c',
       name: '三月实际完成',
       originName: '三月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 10,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '299157397d8a1378c0ac752ce9fed8aa',
       name: '三月完成百分比',
       originName: '三月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 11,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '698ab8cce51de752087872ed6ce5aced',
       name: '四月计划完成',
       originName: '四月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 12,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'be01fb3f99962a1260c84f145e889c63',
       name: '四月实际完成',
       originName: '四月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 13,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '034a3a6e307518a275436e5329adf501',
       name: '四月完成百分比',
       originName: '四月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 14,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '62c73ca0ed6bd388d06f20075130b8c0',
       name: '五月计划完成',
       originName: '五月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 15,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '28c3f1211a8ce05dec41f0bcf1a844cf',
       name: '五月实际完成',
       originName: '五月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 16,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '73dd97fe9cf21a5601aa4b10fb8d5833',
       name: '五月完成百分比',
       originName: '五月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 17,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '7767ec6767d9e55bf1236b6b5f5c3cde',
       name: '六月计划完成',
       originName: '六月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 18,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'cf288927a17be1e79f723da13ddd1f83',
       name: '六月实际完成',
       originName: '六月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 19,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '8ad4458bf581aa31500c5aa0a93cbb4f',
       name: '六月完成百分比',
       originName: '六月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 20,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '17a632924d97ccb325d4bf412aeb089b',
       name: '七月计划完成',
       originName: '七月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 21,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '2c288bfb88e3010faf633853ab68517b',
       name: '七月实际完成',
       originName: '七月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 22,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '89aba50d88cb222f2a58616dad47c201',
       name: '七月完成百分比',
       originName: '七月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 23,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'ded9bd90b15a88b363f3769cb534336f',
       name: '八月计划完成',
       originName: '八月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 24,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '58e0fb043e656295ce7d6ff2d92b12fa',
       name: '八月实际完成',
       originName: '八月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 25,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '27900c59ada01f23666bb85a8495ccf2',
       name: '八月完成百分比',
       originName: '八月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 26,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '8af240a60f897e13f2368195baac430d',
       name: '九月计划完成',
       originName: '九月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 27,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'c946cb103ac17dcfe2bd58d06fa0386e',
       name: '九月实际完成',
       originName: '九月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 28,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '62f3b4e26c26910f600c05c1d0ea8f71',
       name: '九月完成百分比',
       originName: '九月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 29,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'dd7935f41346ee015f6b0d7747ab41a7',
       name: '十月计划完成',
       originName: '十月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 30,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '0dc1e883dd793ba7d2847de1c6b18105',
       name: '十月实际完成',
       originName: '十月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 31,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '6ced3056cfbc18001ea08f04f93eda4b',
       name: '十月完成百分比',
       originName: '十月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 32,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'e8b9267f2ba8319bb8e6aa1643cb2e51',
       name: '十一月计划完成',
       originName: '十一月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 33,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '6e4b3752f83aa94d5a2cf636ea4dce0f',
       name: '十一月实际完成',
       originName: '十一月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 34,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '3c39e4c37fd3a1def7fdfb6c2462ce24',
       name: '十一月完成百分比',
       originName: '十一月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 35,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '0efe0fa185c4ed675fea238ca5807aa9',
       name: '十二月计划完成',
       originName: '十二月计划完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 36,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: '55490f2e5cda3fb40e1314d41353440c',
       name: '十二月实际完成',
       originName: '十二月实际完成',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 37,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     },
     {
       id: 'e9e97825b9ce8172802240d3afdae74c',
       name: '十二月完成百分比',
       originName: '十二月完成百分比',
       type: 'number',
       originType: 'DOUBLE',
       category: 'qua',
       columnIndex: 38,
       tableId: 'b033467b04c7a0f256c912efafaf0acc'
     }
   ])
  }, 2000);
});
const titleList = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];


/** 去重获取标段名称 */

const Dtxr = () => {
  // 映射数据
  const [obj, setobjMap] = useState<KeyVal>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cls = useStyle();
    const [sumData, setsumData] = useState<any>([]);
   const [cs,setCs] = useState('')
  // 树形控件
  const [value, setValue] = useState<string | undefined>(undefined);
  const [data, setDATA] = useState();
  const [newData, setnewData] = useState<any[]>([]);
  const sssssssss = useCallback((value:(value:string)=>void)=>{
               let a = '大狸猫狗币'
               value(a)
  },[])
  useEffect(() => {
    axios
      .then((res: any) => {
        const obj: KeyVal = {};
        res?.fields.forEach((item: any) => {
          obj[item.name] = item.id;
        });
        console.log(obj);
        setobjMap(() => obj);
        return obj;
      })
      .then((obj) => {
        console.log(obj, '最中数据');

      
        setsumData(datas.tableRows);
      });
  }, [cs]);
const SSSSSFGFFF= () =>{
      sssssssss((value) => {
        setCs(value);
        console.log(value, cs, '最中数据');
      });
}
  // 处理数据
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<any> = [
    {
      dataIndex: 'index',
      title: '序号',
      align: 'center',
      // fixed: 'left',
      render(value, record, index) {
        return <div style={{ width: '50px' }}>{index}</div>;
      }
    },
    {
      dataIndex: 'd',
      key: sss['标段名称'],
      title: '标段名称',
      align: 'center',
      // width: '300px',
      render(value) {
        return <div style={{ width: '90px' }}>{value}</div>;
      }
    },
    {
      title: '总体情况',
      children: [
        {
          dataIndex: sss['抽检批次'],
          key: sss['抽检批次'],
          title: '抽检批次',
          align: 'center',

          render(value) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'allLength',
          key: sss['合格批次'],
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'allNo',
          key: 'overallSituationSamplingInspectionBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'allQualifiedRate',
          key: 'allQualifiedRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        }
      ]
    },
    {
      title: '水泥',
      children: [
        {
          dataIndex: 'SNspotCheckBatch',
          key: 'SNspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'SNqualifiedBatch',
          key: 'SNqualifiedBatch',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'SNbatchUnderTest',
          key: 'SNbatchUnderTest',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'SNpassRate',
          key: 'SNpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        }
      ]
    },
    {
      title: '粉煤灰',
      children: [
        {
          dataIndex: 'fMHspotCheckBatch',
          key: 'fMHspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'fMHualifiedBatch',
          key: 'SNqualifiedBatch',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'fMHbatchUnderTest',
          key: 'fMHbatchUnderTest',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'fMHpassRate',
          key: 'fMHpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        }
      ]
    },
    {
      title: '细骨料',
      children: [
        {
          dataIndex: 'XGLspotCheckBatch',
          key: 'XGLspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'XGLualifiedBatch',
          key: 'XGLualifiedBatch',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'XGLbatchUnderTest',
          key: 'XGLbatchUnderTest',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        },
        {
          dataIndex: 'XGLpassRate',
          key: 'XGLpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
          // render(value) {
          //     return <div style={{ width: "80px" }}>{value}</div>;
          // },
        }
      ]
    },
    {
      title: '粗骨料',
      children: [
        {
          dataIndex: 'CGLspotCheckBatch',
          key: 'CGLspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'CGLbatchUnderTest',
          key: 'CGLbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'CGLqualifiedBatch',
          key: 'CGLqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'CGLpassRate',
          key: 'CGLpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },

    {
      title: '母岩',
      children: [
        {
          dataIndex: 'MYspotCheckBatch',
          key: 'MYspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'MYbatchUnderTest',
          key: 'MYbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'MYqualifiedBatch',
          key: 'MYqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'CGLpassRate',
          key: 'CGLpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },

    {
      title: '外加剂',
      children: [
        {
          dataIndex: 'WJJspotCheckBatch',
          key: 'WJJspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'WJJbatchUnderTest',
          key: 'WJJbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'WJJqualifiedBatch',
          key: 'WJJqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'WJJpassRate',
          key: 'WJJpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },
    {
      title: '锚杆',
      children: [
        {
          dataIndex: 'MGspotCheckBatch',
          key: 'MGspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'MGbatchUnderTest',
          key: 'MGbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'MGqualifiedBatch',
          key: 'MGqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'MGpassRate',
          key: 'MGpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },
    {
      title: '防水板',
      children: [
        {
          dataIndex: 'FSBspotCheckBatch',
          key: 'FSBspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'FSBbatchUnderTest',
          key: 'FSBbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'FSBqualifiedBatch',
          key: 'FSBqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'FSBpassRate',
          key: 'FSBpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },
    {
      title: '止水带',
      children: [
        {
          dataIndex: 'ZSspotCheckBatch',
          key: 'ZSspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'ZSbatchUnderTest',
          key: 'ZSbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'ZSqualifiedBatch',
          key: 'ZSqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'ZSpassRate',
          key: 'ZSpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },
    {
      title: '防排水板',
      children: [
        {
          dataIndex: 'FPSBspotCheckBatch',
          key: 'FPSBspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'FPSBbatchUnderTest',
          key: 'FPSBbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'FPSBqualifiedBatch',
          key: 'FPSBqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'FPSBpassRate',
          key: 'FPSBpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },
    {
      title: '排水盲管',
      children: [
        {
          dataIndex: 'PSMGspotCheckBatch',
          key: 'PSMGspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'PSMGbatchUnderTest',
          key: 'PSMGbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'PSMGqualifiedBatch',
          key: 'PSMGqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: 'PSMGpassRate',
          key: 'PSMGpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    },
    {
      title: '钢筋抽检',
      children: [
        {
          dataIndex: '钢筋抽检length',
          key: 'GJspotCheckBatch',
          title: '抽检批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: '钢筋抽检ok',
          key: 'GJbatchUnderTest',
          title: '合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: '钢筋抽检no',
          key: 'GJqualifiedBatch',
          title: '不合格批次',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        },
        {
          dataIndex: '钢筋抽检qualifiedRate',
          key: 'GJpassRate',
          title: '合格率',
          align: 'center',
          render(value, record, index) {
            return <div style={{ width: '80px' }}>{value ?? 0}</div>;
          }
        }
      ]
    }
  ];

  return (
    <>
    <button onClick={SSSSSFGFFF}>点击ss</button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          background: 'url("https://th.bing.com/th/id/R.6b12f92b2c73d59abb4a81c2a7808467?rik=AOYXr9mdOp6G7Q&riu=http%3a%2f%2fwww.sozai-dx.com%2fphoto%2fsora%2fsora_006.jpg&ehk=Co%2buSx8OorSzBmRVBYeDI4axPXhEO2OLj23fZvtlDjM%3d&risl=&pid=ImgRaw&r=0")'
        }}
      >
    
        <div style={{ height: '850px', width: '100%', overflow: 'auto', marginTop: '20px', paddingRight: '40px' }} className={cls.root}>
          <ComTable className={`${cls.antdTables}${cls.dh}`} dataSource={[]} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Dtxr;
