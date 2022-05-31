import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Radio, Modal, Cascader ,Tree} from 'antd'

class UserTree extends PureComponent {
    formRef = React.createRef()
  
  
    render() {
      const { item,
        treePro,
        onExpand,
        onCheck, 
        onSelect,
        } = this.props
  
      
  
      return (
          <Tree
            checkable
            onExpand={onExpand}
            expandedKeys={treePro.expandedKeys}
            autoExpandParent={treePro.autoExpandParent}
            onCheck={onCheck}
            checkedKeys={treePro.checkedTitlesTmp}
            onSelect={onSelect}
            selectedKeys={treePro.selectedTitlesTmp}
            treeData={item}
          />
      )
    }
  }
  
  
  export default UserTree