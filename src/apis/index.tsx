import { constrainedMemory } from "process";
import { use } from "react";

// 请求地址
const apiHostUrl = process.env.API_HOST_URL ? process.env.API_HOST_URL : "https://apifoxmock.com/m1/5334261-0-default";

/**
 * 装配抽奖
 * @param activityId 
 * @returns 
 */
export const activityArmory = (activityId: number) => {
    return fetch(`${apiHostUrl}/api/v1/raffle/activity/armory?activityId=${activityId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
}

/**
 * 查询奖品列表
 * @param userId 
 * @param activityId 
 * @returns 
 */
export const queryRaffleAwardList = (userId: string, activityId?: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/strategy/query_raffle_award_list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                userId: userId,
                activityId: activityId
            })
        });
    } catch (error) {
        return fetch("{\n" + 
            "    \"code\": 0001,\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": []\n" + 
            "}");
    }
}

/**
 * 抽奖接口
 * @param userId 
 * @param activityId 
 * @returns 
 */
export const draw = (userId: string, activityId?: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/draw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                userId: userId,
                activityId: activityId
            })
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": []\n" +
            "}");
    }
}

/**
 * 查询账户额度
 * @param userId 
 * @param activityId 
 * @returns 
 */
export const queryUserActivityAccount = (userId?: string, activityId?: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/query_user_activity_account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                userId: userId,
                activityId: activityId
            })
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }

}

export const calendarSignRebate = (userId?: string) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/calendar_sign_rebate?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}

export const isCalendarSignRebate = (userId?: string) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/is_calendar_sign_rebate?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }

}

export const queryRaffleStrategyRuleWeight = (userId?: string, activityId?: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/strategy/query_raffle_strategy_rule_weight`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                userId: userId,
                activityId: activityId
            })
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}

export const queryUserCreditAccount = (userId?: string) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/query_user_credit_account?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}

export const querySkuProductListByActivityId = (activityId?: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/query_sku_product_list_by_activity_id?activityId=${activityId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }

}

export const creditPayExchangeSku = (userId?: string, sku?: number) => {
    try {
        return fetch(`${apiHostUrl}/api/v1/raffle/activity/credit_pay_exchange_sku`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                userId: userId,
                sku: sku
            })
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }

}