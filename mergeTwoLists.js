/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const ListNode1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const ListNode2 = new ListNode(1, new ListNode(3, new ListNode(4)))


var mergeTwoLists = function (list1, list2) {

    let head = tail = null

    while(list1 || list2) {
        if(list1 === null) {
            if(head === null) {
                head = list2
            }else {
                tail.next = list2
            }
            break
        }else if (list2 === null) {
            if(head === null) {
                head = list1
            }else {
                tail.next = list1
            }
            break
        } else if(list1.val < list2.val) {
            if(head === null) {
                head = tail = list1
            }else {
                tail.next = list1
                tail = tail.next
            }
            list1 = list1.next
        }else {
            if(head === null) {
                head = tail = list2
            }else {
                tail.next = list2
                tail = tail.next
            }
            list2 = list2.next
        }
    }
    return head
};

console.log(mergeTwoLists(ListNode1, ListNode2))