import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from "react-icons/si";

export const SidebarData = [
  {
    title: 'Home',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Email',
    path:'/email',
    icon: <IoIcons.IoMdMail />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    
    subNav: [
      {
        title: 'File Mail',
        path: '/email',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      },
      {
        title: 'HTML Mail',
        path: '/email2',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Schedule Mail',
    path: '/products',
    icon: <AiIcons.AiFillSchedule />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Single Template',
        path: '/schedule/singlemail',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      },
      {
        title: 'Multiple Template',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Firebase',
    path: '/team',
    icon: <SiIcons.SiFirebase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Update Notification',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      },
      {
        title: 'Update FCM',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      },
      {
        title: 'Verify Token',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Manage Mails',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Update Email Content',
        path: '/messages/message1',
        icon: <IoIcons.IoIosArrowForward />
      },
      {
        title: 'All Mails',
        path: '/messages/message2',
        icon: <IoIcons.IoIosArrowForward />
      }
    ]
  },
  {
    title: 'Manage Messages',
    path: '/support',
    icon: <AiIcons.AiFillMessage />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Update Message Content',
        path: '/messages/message1',
        icon: <IoIcons.IoIosArrowForward />
      },
      {
        title: 'All Messages',
        path: '/messages/message2',
        icon: <IoIcons.IoIosArrowForward />
      }
    ]
  }
];
