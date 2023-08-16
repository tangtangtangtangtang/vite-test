/* extensions: [".vue"], target: 3.3, lib: "vue", jsxSlots: false, strictTemplates: false, skipTemplateCodegen: false, nativeTags: ["html","body","base","head","link","meta","style","title","address","article","aside","footer","header","hgroup","h1","h2","h3","h4","h5","h6","nav","section","div","dd","dl","dt","figcaption","figure","picture","hr","img","li","main","ol","p","pre","ul","a","b","abbr","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","script","noscript","del","ins","caption","col","colgroup","table","thead","tbody","td","th","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","template","blockquote","iframe","tfoot","svg","animate","animateMotion","animateTransform","circle","clipPath","color-profile","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistanceLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","hatch","hatchpath","image","line","linearGradient","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","solidcolor","stop","switch","symbol","text","textPath","tspan","unknown","use","view","slot","component"], dataAttributes: [], htmlAttributes: ["aria-*"], optionsWrapper: ["(await import('vue')).defineComponent(",")"], macros: {"defineProps":["defineProps"],"defineSlots":["defineSlots"],"defineEmits":["defineEmits"],"defineExpose":["defineExpose"],"withDefaults":["withDefaults"]}, plugins: [], hooks: [], experimentalDefinePropProposal: false, experimentalAdditionalLanguageModules: [], experimentalResolveStyleCssClasses: "scoped", experimentalModelPropName: {"":{"input":true},"value":{"input":{"type":"text"},"textarea":true,"select":true}}, experimentalUseElementAccessInTemplate: false */

// defineProps<{
//   test: number
// }>()const { defineProps, defineEmits, defineExpose, defineOptions, defineSlots, defineModel, withDefaults } = await import('vue');
// defineProps<{
//   test: number
// }>()
defineEmits<{
  (event: 'status-bar-height', value: number): void;
  (event: 'go-task'): void;
  (event: 'activeLevel', value: number): void;
  // (e: 'btn-less-click'): void
}>()

const __VLS_publicComponent = (await import('vue')).defineComponent({
emits: ({} as __VLS_UnionToIntersection<__VLS_NormalizeEmits<{
  (event: 'status-bar-height', value: number): void;
  (event: 'go-task'): void;
  (event: 'activeLevel', value: number): void;
  // (e: 'btn-less-click'): void
}>>),
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'HelloWorld';
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
;
({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
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
};
},
});
export default {} as typeof __VLS_publicComponent;

type __VLS_UnionToIntersection<U> = __VLS_Prettify<(U extends unknown ? (arg: U) => unknown : never) extends ((arg: infer P) => unknown) ? P : never>;
type __VLS_ConstructorOverloads<T> =
// 3
T extends {
(event: infer E1, ...payload: infer P1): void;
(event: infer E2, ...payload: infer P2): void;
(event: infer E3, ...payload: infer P3): void;
} ? (
(E1 extends string ? { [K1 in E1]: (...payload: P1) => void } : {})
& (E2 extends string ? { [K2 in E2]: (...payload: P2) => void } : {})
& (E3 extends string ? { [K3 in E3]: (...payload: P3) => void } : {})
) :
// 0
{};
type __VLS_NormalizeEmits<T> = __VLS_ConstructorOverloads<T> & {
				[K in keyof T]: T[K] extends any[] ? { (...args: T[K]): void } : never
			}
type __VLS_Prettify<T> = { [K in keyof T]: T[K]; } & {};
