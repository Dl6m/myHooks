import { useState ,useCallback, useEffect} from 'react';
import type { ColumnsType } from 'antd/es/table';
import ComTable from '../../components/ComTable';
import { Button, Modal, TreeSelect, Space, Form, Input, Row } from 'antd';
import useStyle from './style';
import MyComponent from '../../components/MYmodel'
import { type } from '@testing-library/user-event/dist/type';
// import TreeControl from '../../components/treeControl';
  const BGhover = require('./img/BGhover.png');
    const BGnor = require('./img/BGnor.png');
    const TBhover = require('./img/TBhover.png');
    const TBnor = require('./img/TBnor.png');
// import BGhover from './img/BGhover.png'
// import BGnor from './img/BGnor.png';
// import TBhover from './img/TBhover.png';
// import TBnor from './img/TBnor.png';

interface treeDataType {
  value: string;
  title: string;
  children?: treeDataType[];
}
//! 枚举数据
const treeData: treeDataType[] = [
  {
    value: 'FeedBack ',
    title: '信用评价',
    children: [
      {
        value: 'FB_DEDUCT_POINTS',
        title: '信用评价扣分',
      },
      {
        value: 'FB_MISBEHAVIOR_ROWS',
        title: '不良行为记录',
      },
      {
        value: 'FB_ENTERPRISE_EVALUATION_TRENDS_BUILD_UNIT',
        title: '企业评价动态',
      },
    ],
  },
  {
    value: 'CostControl ',
    title: '投资控制',
    children: [
      {
        value: 'CC_EXECUTION',
        title: '信用评价扣分',
      },
      {
        value: 'CC_VALUATION_SITUATION',
        title: '验工计价情况',
      },
    ],
  },
  {
    value: 'SUPPLIES_EQUIPMENT  ',
    title: '物资设备',
    children: [
      {
        value: 'SE_CONTRACTS_ENFORCE_RATIO',
        title: '合同执行率',
      },
      {
        value: 'SE_SUPPLY_COMPLETE_RATIO',
        title: '供应完成率',
      },
      {
        value: 'SE_DETECTION_QUALIFIED',
        title: '检测合格率',
      },
      {
        value: 'SE_MATERIAL_STORAGE',
        title: '物资仓储',
      },
      {
        value: 'SE_DEFECTS_ROWS',
        title: '不合格品记录',
      },
      {
        value: 'RFP',
        title: '问题整改情况',
        children: [
          {
            value: 'SE_RFP_RAW_MATERIALS_TWO',
            title: '问题整改情况(原材料抽检二级)',
          },
          {
            value: 'SE_RFP_RAW_MATERIALS_THREE',
            title: '问题整改情况(原材料抽检三级)',
          },
          {
            value: 'SE_RFP_SCENE_INSPECTION_TWO',
            title: '问题整改情况(二级现场检查)',
          },
          {
            value: 'SE_RFP_SCENE_INSPECTION_THREE',
            title: '问题整改情况(三级现场检查)',
          },
        ],
      },
    ],
  },
];
// 原材抽检数据
type TypeStr = 'TBnor' | 'TBhover' | 'BGnor' | 'BGhover'
const sss = { 标段名称: 'dddddd', 抽检批次: 'bbbbb', 合格批次: 'ccccc' };

const axios = new Promise((reslove)=>{
    setTimeout(()=>{
        reslove([
  {
    lotId: '',
    lot: 'XCGQSD-1标',
    overallSituationSamplingInspectionBatch: '5',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '5',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '1',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '1',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCGQSD-2标',
    overallSituationSamplingInspectionBatch: '5',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '5',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '1',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '1',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-1标',
    overallSituationSamplingInspectionBatch: '6',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '6',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '1',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '1',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '1',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '1',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '0',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '0',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '1',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '1',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-2标',
    overallSituationSamplingInspectionBatch: '11',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '11',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '2',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '2',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '0',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '0',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '1',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '1',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '1',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '1',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '3',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '3',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '2',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '2',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-3标',
    overallSituationSamplingInspectionBatch: '17',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '17',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '4',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '4',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '4',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '4',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '4',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '4',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '2',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '2',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '1',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '1',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-4标',
    overallSituationSamplingInspectionBatch: '10',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '10',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '2',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '2',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '1',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '1',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '2',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '2',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '1',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '1',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '2',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '2',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '1',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '1',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-5标',
    overallSituationSamplingInspectionBatch: '5',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '5',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '0',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '0',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '0',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '0',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '0',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '2',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '2',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '2',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '2',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '0',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '0',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-6标',
    overallSituationSamplingInspectionBatch: '5',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '5',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '0',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '0',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '0',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '0',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '0',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '3',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '3',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '2',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '2',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '0',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '0',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-7标',
    overallSituationSamplingInspectionBatch: '9',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '9',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '0',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '0',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '0',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '0',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '0',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '2',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '2',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '2',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '2',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '2',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '2',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '2',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '2',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '0',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '0',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-8标',
    overallSituationSamplingInspectionBatch: '1',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '1',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '0',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '0',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '0',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '0',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '0',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '0',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '0',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '0',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '0',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-9标',
    overallSituationSamplingInspectionBatch: '7',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '7',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '0',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '0',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '0',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '2',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '2',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '1',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '1',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '2',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '2',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '1',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '1',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '0',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '0',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-10标',
    overallSituationSamplingInspectionBatch: '12',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '12',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '0',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '0',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '0',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '1',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '1',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '2',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '2',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '2',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '2',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '2',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '2',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '2',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '2',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '1',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '1',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-11标二公局',
    overallSituationSamplingInspectionBatch: '7',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '7',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '1',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '1',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '1',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '1',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '0',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '0',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '1',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '1',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '0',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '0',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-11标大桥局',
    overallSituationSamplingInspectionBatch: '15',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '14',
    overallNonconformity: '1',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '1',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '1',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '3',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '2',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '1',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '1',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '1',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '1',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '1',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '1',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '2',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '2',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '1',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '1',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-12标',
    overallSituationSamplingInspectionBatch: '11',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '11',
    overallNonconformity: '0',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '1',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '0',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '0',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '3',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '3',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '0',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '0',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '1',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '1',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '0',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '0',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '2',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '2',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '1',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '1',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
  {
    lotId: '',
    lot: 'XCTJ-13标',
    overallSituationSamplingInspectionBatch: '13',
    overallSituationDetectionMediumBatch: '0',
    overallConditionQualifiedBatch: '11',
    overallNonconformity: '2',
    overallQualificationRate: '100.00%',
    SNspotCheckBatch: '1',
    SNbatchUnderTest: '0',
    SNqualifiedBatch: '0',
    SNpassRate: '100.00%',
    fMHspotCheckBatch: '1',
    fMHualifiedBatch: '0',
    fMHbatchUnderTest: '1',
    fMHpassRate: '100.00%',
    XGLspotCheckBatch: '1',
    XGLualifiedBatch: '0',
    XGLbatchUnderTest: '1',
    XGLpassRate: '100.00%',
    CGLspotCheckBatch: '1',
    CGLbatchUnderTest: '0',
    CGLqualifiedBatch: '1',
    CGLpassRate: '100.00%',
    MYspotCheckBatch: '0',
    MYbatchUnderTest: '0',
    MYqualifiedBatch: '0',
    MYpassRate: '100.00%',
    WJJspotCheckBatch: '2',
    WJJbatchUnderTest: '0',
    WJJqualifiedBatch: '1',
    WJJpassRate: '100.00%',
    MGspotCheckBatch: '0',
    MGbatchUnderTest: '0',
    MGqualifiedBatch: '0',
    MGpassRate: '100.00%',
    FSBspotCheckBatch: '1',
    FSBbatchUnderTest: '0',
    FSBqualifiedBatch: '1',
    FSBpassRate: '100.00%',
    ZSspotCheckBatch: '1',
    ZSbatchUnderTest: '0',
    ZSqualifiedBatch: '1',
    ZSpassRate: '100.00%',
    FPSBspotCheckBatch: '1',
    FPSBbatchUnderTest: '0',
    FPSBqualifiedBatch: '1',
    FPSBpassRate: '100.00%',
    PSMGspotCheckBatch: '0',
    PSMGbatchUnderTest: '0',
    PSMGqualifiedBatch: '0',
    PSMGpassRate: '100.00%',
    GJspotCheckBatch: '1',
    GJbatchUnderTest: '0',
    GJqualifiedBatch: '1',
    GJpassRate: '100.00%',
    JXLJspotCheckBatch: '0',
    JXLJbatchUnderTest: '0',
    JXLJqualifiedBatch: '0',
    JXLJpassRate: '100.00%',
    XGspotCheckBatch: '2',
    XGbatchUnderTest: '0',
    XGqualifiedBatch: '2',
    XGpassRate: '100.00%',
    TGBspotCheckBatch: '1',
    TGBbatchUnderTest: '0',
    TGBqualifiedBatch: '1',
    TGBpassRate: '100.00%',
    TGGSspotCheckBatch: '0',
    TGGSbatchUnderTest: '0',
    TGGSqualifiedBatch: '0',
    TGGSpassRate: '100.00%',
  },
])
    },100)
})

   const onetableRows = [
     {
       d: 'a',
       a: '合格',
       b: '21111601-R',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220226',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'HL20210930100',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '不合格',
       b: 'FS4210411',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'BJ028',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '机械连接,'
     },
     {
       d: 'b',
       a: '合格',
       b: 'LBS21103',
       c: '水泥'
     },
     {
       d: 'b',
       a: '合格',
       b: 'P220107114',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JGP4Q220034',
       c: '钢筋抽检'
     },
     {
       d: 'c',
       a: '水泥',
       b: 'GC0080142421',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'A11A181A',
       c: '钢筋抽检,'
     },
     {
       d: 'b',
       a: '合格',
       b: 'F20220220-241',
       c: '钢筋抽检'
     },
     {
       d: 'd',
       a: '合格',
       b: 'TBDS7510815',
       c: '钢筋抽检'
     },
     {
       d: 'a',
       a: '合格',
       'f5950779 ceb0731cfbc1fc78d1e4b671': 'JC-20210523-01',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021122501',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH20220322108',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'C20110442476',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: '220126001-R',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SNJ2021122103',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F2021020008',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LY21011252',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'TCS1I8',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220043',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220123001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JGP4Q210242',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZP-2021-1012',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07000328006',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SNJ20211212019',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LM-20210920',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH20220227002',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '冷挤压套,筒'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021122501',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FUXINY2021100 52553-2',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: '20210002-1',
       c: '施工缝用,中埋式钢板止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'BJ030',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P22001615',
       c: '热轧带肋,钢筋'
     },
     {
       d: 'e',
       a: '不合格',
       b: 'S2021121501',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '11-38320',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'EVAPB20211004',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'G1121202',
       c: '无缝钢管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JSJ20220123001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LBT2190208',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'A11A475A',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '22000317',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: '22L001',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20220219',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20211207',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220005',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZ3-20211222001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JB4Φ28ZJ19301',
       c: '冷挤压套,筒'
     },
     {
       d: 'a',
       a: '合格',
       b: '20210005',
       c: '变形缝用,背贴式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LBT1991292',
       c: '滚轧直螺,纹机械连接'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P21092737',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'AY0420907',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FP20211201',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '22010115',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '736827',
       c: '无缝钢管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021123002',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '11-2203218217',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CDHJ20201224-003A',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: '22B103695',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FPP211109-01',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211009',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: '5479216-23',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: 'ZR2021020402',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FP20210801',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021-001',
       c: '施工缝用,中埋式钢板止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH20211223001',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'B2011C531601',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'B20121572601',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S2022020701',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'Z20210906',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021122501-PCB',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '211340065',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '22B100650',
       c: '冷挤压套,筒'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20220206',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FPP211109-02',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '10-11528',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'L2111287',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '321122924',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '21001146',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'ZR202112101',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: '12-70684',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '检测中',
       b: 'HLAE-20220210',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'B20121564801',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'C4-145',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '10-231862',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'A11A160A',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P21102404',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '20210819001',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH20220227001',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'EVAPB20210606',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P220208817',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20210717',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'ZR2021121101',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: '5-34156 AY 1190003',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P22011738',
       c: '机械连接,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH2021121811',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220206004',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'L1108075',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'Z12245',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F2-22-0311',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '422021008',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'RK-YQJ220031001',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'J20211107001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P22011737',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220115002',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '421120241 421121240',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20211210',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S20220216003',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '2022030030',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JC-20211229-1',
       c: '预应力中,空锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S20220209001',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'RK-JSS220030102',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '不合格',
       b: 'S20211218001',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH2022022810',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220220C',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'L21112015',
       c: '无缝钢管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '6-48652',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'HT-MG21 1230',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211202',
       c: '涨壳式预,应力中空锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FP20210603',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '20-1230-50DG',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '222030211',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '不合格',
       b: 'JSJ2021120316',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220406007',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH20220320-020',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'RK-SNJ 22022206',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '422010426',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'PB20220305',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20211225',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'ZPGC-20220312',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220001',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '2022030015',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220118-1',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S2022012302',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-2021120 7',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220082',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SP0-019',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220215',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211122001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '272493',
       c: '滚轧直螺,纹机械连接'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021111002',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JSJ20220122002',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '细骨料'
     },
     {
       d: 'a',
       a: '不合格',
       b: '20220123002',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220028',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '滚轧直螺,纹机械连接'
     },
     {
       d: 'a',
       a: '合格',
       b: 'G1095027',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: 'PB20210909-1',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'Z20210907',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: '20-1230-100WG',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211223',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'EVAPB20211006',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: '10-65784',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FP20210901',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'Z20211213',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'XDZ21C03058',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: '422010907',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-2-2',
       c: '施工缝用,背贴式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FPP211106-01',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220310004',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '422020150',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'L2200642',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '12-70685',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: '21001106',
       c: '涨壳式预,应力中空锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LY21011248',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZ3-20220201001',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH20220402007',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'DS122012',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'BS20220218025',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F20211221-001',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '21B108719',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FGCZ220224-42.5',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220303',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'BCC1022-033',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '220120001-R',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JGP4Q210222',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JGP4Q220052',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'C201109732 81',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FPP211102-02',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211227',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220220B',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '11-2203058182',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'PI1211 1',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'B5217',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'BCC1022-023',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-2021121 0',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '不合格',
       b: 'FMH2021112708',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T220215447',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F2-22-0305',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021-001',
       c: '变形缝用,背贴式自粘橡胶钢边止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZ3-20220304001',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-6-1',
       c: '施工缝用,中埋式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-6-5',
       c: '施工缝用,背贴式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SDLJ20211028',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021102128',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JGP4Q210214',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LBT1991292',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220079',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FPP211102-01',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-6-3',
       c: '施工缝用,中埋式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F20210803-026',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '211108029',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FGCZ220313-42.5',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GI012042',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P21102703',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SNJ2021112 0010',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '2112300735',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021092201',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211103001',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: '20-1230-80DG',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'PFSB20211212',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: '202212016',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'ZSF202203022048',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220036',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SP0-022',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FMH2021122105',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GY2021062802',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F20220320-020',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'G1125007',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: 'HL-20220303',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F20211002',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021122001',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LBS21078',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20211105',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '不合格',
       b: '/',
       c: '粗骨料'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GC0080244941',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '422011247',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '8107149805',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '粗骨料'
     },
     {
       d: 'a',
       a: '合格',
       b: '2022010801-PCB',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S2022020902',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07211023003',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021121001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '20210003-1',
       c: '施工缝用,背贴式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: '/',
       c: '母岩'
     },
     {
       d: 'a',
       a: '合格',
       b: '422010148、422010149',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021-202',
       c: '变形缝用,背贴式自粘橡胶钢边止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LM-20210928',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '12-71257',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FGCZ220301-42.5',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'HL2021062580',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LJ-2021 (111)',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FPP211118-01',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021-202',
       c: '施工缝用,中埋式钢板止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-6-8',
       c: '变形缝用,背贴式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'PFSB20211210',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: '421111644',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220122',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220006',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220308',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211008',
       c: '涨壳式预,应力中空锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: '422011740',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZFP-2022-2001',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211108',
       c: '涨壳式中,空锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'B50119597201',
       c: '钢筋原材,'
     },
     {
       d: 'a',
       a: '合格',
       b: '220103209',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P21082611',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-7-1',
       c: '施工缝用,中埋式钢板止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'P220226102',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220045',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '20# 60*5',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: '9215426',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S20220125001',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F-II-2022010146',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220123002',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SJ004',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'J20211205001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '检测中',
       b: 'C4-128',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220329004',
       c: '速凝剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GB-20220113',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'XI2210262',
       c: '工字钢'
     },
     {
       d: 'a',
       a: '合格',
       b: 'MD07220215003',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '21122413',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '21121301-R',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SP0-005',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SP0-005',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '211130060',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '1150851',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220058',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '21122526',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'BCC1022-037',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '2021092102',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZP-2021-1006',
       c: '防水板'
     },
     {
       d: 'a',
       a: '合格',
       b: '2632186263',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: 'JSJ20220318001',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'GY20210715001',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211214012',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'TDXB-2021-TT-0815',
       c: '滚轧直螺,纹机械连接'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FP20220301',
       c: '防排水板,'
     },
     {
       d: 'a',
       a: '合格',
       b: '2022021301-PCB',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'S220107336',
       c: '热轧带肋,钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'LY21011239',
       c: '减水剂'
     },
     {
       d: 'a',
       a: '合格',
       b: '20210006',
       c: '施工缝用,中埋式自粘橡胶止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'F2022030011',
       c: '粉煤灰'
     },
     {
       d: 'a',
       a: '合格',
       b: 'G1091093',
       c: '无缝钢管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZ3-20211022002',
       c: '引气剂'
     },
     {
       d: 'a',
       a: '合格',
       b: 'W8812011-03',
       c: '钢管'
     },
     {
       d: 'a',
       a: '合格',
       b: 'XDZ21C03089',
       c: '热轧带肋,钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '20211108',
       c: '涨壳式预,应力中空锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'SP0-012',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '21B103658',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: '20210618256',
       c: '土工布'
     },
     {
       d: 'a',
       a: '合格',
       b: 'CZTL210901-01',
       c: '止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220051',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '20220220A',
       c: '排水盲管,'
     },
     {
       d: 'a',
       a: '合格',
       b: 'FS4220037',
       c: '水泥'
     },
     {
       d: 'a',
       a: '合格',
       b: '220110442',
       c: '钢筋'
     },
     {
       d: 'a',
       a: '合格',
       b: 'T210041-7-2',
       c: '施工缝用,中埋式普通钢板止水带'
     },
     {
       d: 'a',
       a: '合格',
       b: 'HBSJ0221341212',
       c: '锚杆'
     },
     {
       d: 'a',
       a: '合格',
       b: 'ZR2021091301',
       c: '止水带'
     }
   ];
      /** 去重获取标段名称 */


const RollingComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cls = useStyle();
  // 树形控件
  const [TBnors, setTBnors] = useState<TypeStr>('TBhover');
  const [BGnorS, setBGnorS] = useState<TypeStr>('BGnor');
  const [value, setValue] = useState<string | undefined>(undefined);
 const [data ,setDATA] = useState()
 useEffect(()=>{
    axios.then((res: any )=>{
        res.map((item : any )=>{
            item[sss['标段名称']] = item.lot;
            item[sss['抽检批次']] = item.overallSituationSamplingInspectionBatch;
            item[sss['合格批次']] = item.overallSituationDetectionMediumBatch;
        })
       setDATA(res);  
    })
 },[])

 const fn = (val: TypeStr) => {
   setTBnors(val);
    setBGnorS((val) => {
      return val === 'BGnor' ? 'BGhover' : 'BGnor';
    });
 };
  const fn1 = (val: TypeStr) => {
    setBGnorS(val);
     setTBnors((val)=>{
       return  val === 'TBhover' ? 'TBnor' : 'TBhover';
     });
  };
  const onChange = (newValue: string) => {
    setValue(newValue);
    console.log('object :>> ', newValue);
  };
    const handleTitleName = (tableRows: any[]) => {
      const map = new Map();
      return tableRows.filter((item) => {
        // 标段名称
        const res = map.get(item.d);
        if (!res) {
          map.set(item.d, true);
          return true;
        }
        return false;
      });
    };
    const onetitleName = handleTitleName(onetableRows);

    /** 处理表头的每一行数据 */
    const columnss = (titleName: any[], tableRows: ({ d: string; a: string; b: string; c: string; 'f5950779 ceb0731cfbc1fc78d1e4b671'?: undefined; } | { d: string; a: string; 'f5950779 ceb0731cfbc1fc78d1e4b671': string; c: string; b?: undefined; })[]) => {
      return titleName.map((item) => {
        const map = new Map();
        for (const allItem of tableRows) {
          // 找相同标段名称的字段
          if (item.d === allItem.d) {
            const mapItem = map.get(allItem.c);
            if (mapItem) {
              map.set(allItem.c, [(mapItem[0] += allItem.a === '合格' ? 1 : 0), (mapItem[1] += allItem.a === '合格' ? 0 : 1), mapItem[2] + 1]);
            } else {
              map.set(allItem.c, [allItem.a === '合格' ? 1 : 0, allItem.a === '合格' ? 0 : 1, 1]);
            }
          }
        }

        console.log(map, '数据查看');
        // 0成功 1失败 2总数
        const obj = {
          ...item,
          allLength: 0,
          allOk: 0,
          allNo: 0,
          allQualifiedRate: '0%'
        };
        console.log(map);
           map.forEach(([ok, no, length],key)=>{
             console.log(item,key);
               obj[key + 'ok'] = ok;
              obj[key + 'no'] = no;
              obj[key + 'length'] = length;
              obj[key + 'qualifiedRate'] = ((ok / length) * 100).toFixed(2) + '%';
              obj.allOk += ok;
              obj.allNo += no;
              obj.allLength += length;
           })

        // for (const [key, [ok, no, length]] of map) {
        //   obj[key + 'ok'] = ok;
        //   obj[key + 'no'] = no;
        //   obj[key + 'length'] = length;
        //   obj[key + 'qualifiedRate'] = ((ok / length) * 100).toFixed(2) + '%';
        //   obj.allOk += ok;
        //   obj.allNo += no;
        //   obj.allLength += length;
        // }
        obj.allQualifiedRate = ((obj.allOk / obj.allLength) * 100).toFixed(2) + '%';
        return { ...obj };
      });
    };
      const newColumns = columnss(onetitleName, onetableRows);
  console.log(newColumns);
//   setnewData(newColumns);
// useCallback(() => {
//   const newColumns = columnss(onetitleName, onetableRows);
//   console.log(newColumns);
//   setnewData(newColumns);
// }, [onetableRows]); ;

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
        // console.log(record['a']+'大狸猫', 'record');
        
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
    // 递归函索
    const fifltersss = useCallback(  (v: string | undefined) => {
        function fn(data: treeDataType[], v: string | undefined): any {
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (item.value === v) {
              return item.title;
            }
            if (item && item.children && item.children.length > 0) {
              const title = fn(item.children, v);
              if (title) {
                return title;
              }
            }
          }
        }
    
        return fn(treeData, v);
      },[])
const fb = (val: string)=>{
    console.log(val,'鬼地方个');
    
}

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          background: 'url("https://th.bing.com/th/id/R.6b12f92b2c73d59abb4a81c2a7808467?rik=AOYXr9mdOp6G7Q&riu=http%3a%2f%2fwww.sozai-dx.com%2fphoto%2fsora%2fsora_006.jpg&ehk=Co%2buSx8OorSzBmRVBYeDI4axPXhEO2OLj23fZvtlDjM%3d&risl=&pid=ImgRaw&r=0")'
        }}
      >
        <Button onClick={showModal}>点击全屏弹窗</Button>
        <h1 style={{ fontSize: '38px' }}>{fifltersss(value)}</h1>
        <div style={{ width: '1000px', margin: '20px auto' }}>
          <TreeSelect style={{ maxWidth: 806 }} value={value} dropdownStyle={{ maxHeight: 800, overflow: 'auto' }} placeholder="请选择数据面板" allowClear treeDefaultExpandAll onChange={onChange} treeData={treeData} />
        </div>
      </div>

      <MyComponent
        // footer={null}
        className={cls.modal}
        title="Basic Modal"
        open={isModalOpen}
        // transitionName="my-modal-ani" // 指定 modal 内容区域的动画效果
        // maskTransitionName="my-modal-mask-ani" // 指定 modal 遮罩层的动画效果
        // @ts-ignore
        maskTransitionName={{
          enter: cls.myModalAniEnter,
          enterActive: cls.myModalAniEnterActive,
          leave: cls.myModalAniLeave,
          leaveActive: cls.myModalAniLeaveActive
        }}
        // @ts-ignore
        transitionName={{
          enter: cls.myModalMaskAniEnter,
          enterActive: cls.myModalMaskAniEnterActive,
          leave: cls.myModalMaskAniLeave,
          leaveActive: cls.myModalMaskAniLeaveActive
        }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>屠晓萱</div>

        <Form>
          <Row>
            <Space>
              <Form.Item label="大狸猫">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button>确认</Button>
              </Form.Item>
              <Form.Item>
                <Button>取消</Button>
              </Form.Item>
              {TBnors === 'TBnor' && (
                <Form.Item style={{ backgroundColor: '#55585e', color: '#bdc0c4' }} className={cls.tables}>
                  <Row
                    onClick={() => {
                      fn('TBhover');
                      fb('TBhover');
                    }}
                    align="middle"
                    style={{ cursor: 'pointer', height: 30, padding: '0 10px' }}
                  >
                    <img src={TBnor} className="img" alt="#" style={{ cursor: 'pointer', height: 30, backgroundColor: '#43474c' }} /> 表格
                  </Row>
                </Form.Item>
              )}
              {TBnors === 'TBhover' && (
                <Form.Item style={{ backgroundColor: '#05c5eb' }}>
                  <Row onClick={() => fn('TBnor')} align="middle" style={{ cursor: 'pointer', height: 30, padding: '0 10px' }}>
                    <img src={TBhover} alt="#" style={{ cursor: 'pointer', height: 30, backgroundColor: '#43474c' }} />
                    表格
                  </Row>
                </Form.Item>
              )}
              {BGnorS === 'BGnor' ? (
                <Form.Item style={{ backgroundColor: '#55585e', color: '#bdc0c4' }} className={cls.tables}>
                  <Row onClick={() => fn1('BGhover')} align="middle" style={{ cursor: 'pointer', height: 30, padding: '0 10px' }}>
                    <img src={BGnor} alt="#" className="img" style={{ cursor: 'pointer', height: 30, backgroundColor: '#43474c' }} /> 图形
                  </Row>
                </Form.Item>
              ) : (
                <Form.Item style={{ backgroundColor: '#05c5eb' }}>
                  <Row onClick={() => fn1('BGnor')} align="middle" style={{ cursor: 'pointer', height: 30, padding: '0 10px' }}>
                    <img src={BGhover} alt="#" style={{ cursor: 'pointer', height: 30, backgroundColor: '#43474c' }} /> 图形
                  </Row>
                </Form.Item>
              )}
            </Space>
          </Row>
        </Form>

        <div style={{ height: '450px', overflow: 'auto', marginTop: '20px' }} className={cls.root}>
          <ComTable className={`${cls.antdTables}${cls.dh}`} dataSource={newColumns} columns={columns}></ComTable>
        </div>
      </MyComponent>
    </>
  );
};

export default RollingComponent;
