import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'WEN Indicators',
        icon: <MailOutlined />,
        children: [
            {
                key: 'WenIndicators_All_Update',
                label: 'Run Updater'
            },
            {
                key: 'gIndicators',
                label: 'Indicators List',
                type: 'group',
                children: [
                    { key: 'WenIndicators_Indicators_Display', label: 'Display Indicators List' },
                    { key: 'WenIndicators_Indicators_Update', label: 'Update Indicators List' },
                ],
            },
            {
                key: 'gReplace',
                label: 'Replace List',
                type: 'group',
                children: [
                    { key: 'WenIndicators_Replace_Display', label: 'Display Replace List' },
                    { key: 'WenIndicators_Replace_Update', label: 'Update Replace List' },
                ],
            },
            {
                key: 'gDatabase',
                label: 'Database List',
                type: 'group',
                children: [
                    { key: 'WenIndicators_Database_Display', label: 'Display Database List' },
                ],
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
        children: [
            { key: '5', label: 'Option 5' },
            { key: '6', label: 'Option 6' },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    { key: '7', label: 'Option 7' },
                    { key: '8', label: 'Option 8' },
                ],
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Navigation Three',
        icon: <SettingOutlined />,
        children: [
            { key: '9', label: 'Option 9' },
            { key: '10', label: 'Option 10' },
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
        ],
    },
    {
        key: 'grp',
        label: 'Group',
        type: 'group',
        children: [
            { key: '13', label: 'Option 13' },
            { key: '14', label: 'Option 14' },
        ],
    },
];