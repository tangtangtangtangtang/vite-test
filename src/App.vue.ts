/* extensions: [".vue"], target: 3.3, lib: "vue", jsxSlots: false, strictTemplates: false, skipTemplateCodegen: false, nativeTags: ["html","body","base","head","link","meta","style","title","address","article","aside","footer","header","hgroup","h1","h2","h3","h4","h5","h6","nav","section","div","dd","dl","dt","figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","template","blockquote","iframe","tfoot","svg","animate","animateMotion","animateTransform","circle","clipPath","color-profile","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistanceLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","solidcolor","stop","switch","symbol","text","textPath","tspan","unknown","use","view","slot","component"], dataAttributes: [], htmlAttributes: ["aria-*"], optionsWrapper: ["(await import('vue')).defineComponent(",")"], macros: {"defineProps":["defineProps"],"defineSlots":["defineSlots"],"defineEmits":["defineEmits"],"defineExpose":["defineExpose"],"withDefaults":["withDefaults"]}, plugins: [], hooks: [], experimentalDefinePropProposal: false, experimentalAdditionalLanguageModules: [], experimentalResolveStyleCssClasses: "scoped", experimentalModelPropName: {"":{"input":true},"value":{"input":{"type":"text"},"textarea":true,"select":true}}, experimentalUseElementAccessInTemplate: false */

// import { h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// const { defineProps, defineEmits, defineExpose, defineOptions, defineSlots, defineModel, withDefaults } = await import('vue');
// h(HelloWorld, {
//   "onBtn-more-click": () => {}
// })
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
& __VLS_WithComponent<'HelloWorld', typeof __VLS_localComponents, "HelloWorld", "HelloWorld", "HelloWorld">
;
__VLS_components.HelloWorld;
// @ts-ignore
[HelloWorld,];
{
let __VLS_0!: 'HelloWorld' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.HelloWorld : typeof __VLS_resolvedLocalAndGlobalComponents['HelloWorld'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ onBtnMoreClick: {} as any, onBtnClick: {} as any, }, }));
({} as { HelloWorld: typeof __VLS_0 }).HelloWorld;
const __VLS_2 = __VLS_1({ ...{ onBtnMoreClick: {} as any, onBtnClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4 = { 'btn-more-click': __VLS_pickEvent(__VLS_3.emit!, 'btn-more-click' as const, __VLS_componentProps(__VLS_1, __VLS_2).onBtnMoreClick) };
__VLS_4 = {
"btn-more-click": (() => {})};
let __VLS_5 = { 'btn-click': __VLS_pickEvent(__VLS_3.emit!, 'btn-click' as const, __VLS_componentProps(__VLS_1, __VLS_2).onBtnClick) };
__VLS_5 = {
"btn-click": (() => {})};
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
HelloWorld: HelloWorld as typeof HelloWorld,
};
},
});
export default {} as typeof __VLS_publicComponent;

