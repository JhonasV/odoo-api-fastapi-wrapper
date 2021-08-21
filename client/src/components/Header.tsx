import { Col, Menu, Row } from 'antd'
import { Link } from 'react-router-dom'
import Margin from './common/Margin'

const Header = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="logo" />
          <Menu
            style={{ paddingLeft: '6em' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/"> Artic Fox</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/">Events</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/config/event">Manager</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  )
}

export default Header
