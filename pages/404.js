// import Link from 'next/link';

// const NotFoundPage = () => {
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
//       <Link href="/" legacyBehavior>
//         <a>Go back to the home page</a>
//       </Link>
//     </div>
//   );
// };

// export default NotFoundPage;
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const onClick = (e) => {
  console.log('click', e);
};
const NotFoundPage = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
);
export default NotFoundPage;