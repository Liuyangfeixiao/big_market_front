import { activityArmory } from "@/apis";

export function StrategyArmory() {
    const strategyArmoryHandle = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const activityId = Number(queryParams.get('activityId'));
        if (!activityId) {
            window.alert("请在请求地址中配置 activityId 值，如：http://localhost:3000/?activityId=100301")
            return;
        }
        const res = await activityArmory(activityId);
        const {code, info} = await res.json();
        if (code != "0000") {
            window.alert("抽奖活动策略装配失败 code:" + code + " info:" + info);
            return;
        }
    }

    return (
        <div 
            className="px-6 py-2 mb-8 text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{cursor: "pointer"}}
            onClick={strategyArmoryHandle}>
            装配抽奖
        </div>
    )
}