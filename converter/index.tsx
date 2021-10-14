import ProCard from '@ant-design/pro-card';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Col, Typography, Row, InputNumber, Button } from 'antd';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { useMap } from 'ahooks';
import styles from './index.less'
import { CONVERTER, MATCHUUP } from './constant'
import converter from './converter'

type KEY_MATCHUUP = keyof typeof MATCHUUP
type VALUE_MATCHUUP = typeof MATCHUUP[KEY_MATCHUUP]

export default () => {
    const [selectKey, setSelectKey] = useState<KEY_MATCHUUP>('length')
    const [_, { set, reset: onClear, get }] = useMap<string | number, string>();

    const ActiveItem = (key: string) => classNames({
        [styles.active]: key === selectKey
    })

    const currentTab = useMemo(() => CONVERTER.find(item => item.key === selectKey), [selectKey])

    const operation = (arr: VALUE_MATCHUUP, value: string, key: string) => arr.map(c => {
        if (c.key !== key) {
            set(c.key, converter[selectKey](+value, key, c.key))
        } else {
            set(c.key, value)
        }
    })

    const onChange = (value: string, key: string) => {
        if (['volume', 'weight'].includes(selectKey)) {
            MATCHUUP[selectKey as "volume" || 'weight'].map(item => {
                operation(item.children, value, key)
            })
        } else {
            operation(MATCHUUP[selectKey as "volume" || 'weight'], value, key)
        }
    }

    const renderPanel = () => {
        if (['volume', 'weight'].includes(selectKey)) {
            return MATCHUUP[selectKey as "volume" || 'weight'].map(item => <div key={item.key}>
                <Typography.Title level={5}>{item.name}</Typography.Title>
                <Row gutter={[16, 16]}>
                    {item.children.map(c => <Col key={c.key} span={6}>
                        <Typography.Text >{c.name}</Typography.Text>
                        <InputNumber
                            value={get(c.key)}
                            onChange={(v) => onChange(v, c.key)}
                        />
                    </Col>
                    )}
                </Row>
            </div>)
        }
        return <Row gutter={[16, 16]}>
            {MATCHUUP[selectKey].map(item => <Col key={item.key} span={6}>
                <Typography.Text >{item.name}</Typography.Text>
                <InputNumber
                    value={get(item.key)}
                    onChange={(v) => onChange(v, item.key)}
                />
            </Col>
            )}
        </Row>
    }

    return <ProLayout
        title="度量衡"
        contentWidth="Fixed"
        pure>
        <PageContainer className={styles.app}>
            <ProCard title={
                <Typography.Title level={3}>
                    {currentTab?.name}转换器
                </Typography.Title>
            }>
                <Row gutter={[16, 16]}>
                    {CONVERTER.map(item => <Col className={styles.tabsItem} key={item.key} span={6} onClick={() => {
                        onClear();
                        setSelectKey(item.key as KEY_MATCHUUP)
                    }}>
                        <div className={ActiveItem(item.key)}>{item.name}</div>
                    </Col>)}
                </Row>
                <Typography.Paragraph>{currentTab?.desc}</Typography.Paragraph>
                <div className={styles.panel}>
                    {renderPanel()}
                    <div className={styles.handle}>
                        <Button type="primary" size="large" onClick={onClear}>数据重置</Button>
                    </div>
                </div>
            </ProCard>
        </PageContainer>
    </ProLayout>
}