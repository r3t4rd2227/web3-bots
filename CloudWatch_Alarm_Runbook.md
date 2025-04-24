# 🛠️ CloudWatch Alarm Response Runbook

## 🔍 Overview

This runbook provides step-by-step guidance for handling CloudWatch alarms related to:

- **Direct Connect (DX) connection state**
- **Transit Gateway (TGW) BytesOut**
- **VPN Tunnel State**

## 🔧 Actions Taken

1. Acknowledge the CloudWatch alarm and verify which connection is impacted (DX, TGW, or VPN).
2. Confirm the metric status (e.g., `TunnelState = 0` or `TGW BytesOut = 0`).
3. Check the AWS Health Dashboard for related service events.
4. Create an internal ticket and notify the Network Team.
5. The Network Team will:
   - Verify the status of on-prem router/firewall.
   - Check the provider circuit and physical connectivity.
   - Troubleshoot and resolve the issue from the on-prem side.
6. Monitor the metric for recovery and validate restored connectivity.

## 🚨 Escalation Path

1. When a CloudWatch alarm is triggered for a DX connection (e.g., connection down, BytesOut drops to zero):
   - Create an internal ticket referencing the affected connection (include any known circuit IDs, AWS location, etc.)
   - Notify the **NetOps team** (on-call will be paged automatically via **LogicMonitor** if not already engaged).

2. **NetOps Investigation**:
   - The NetOps team will investigate the issue using their monitoring tools, including **LogicMonitor**.
   - Based on the initial findings, they will determine whether:
     - The issue is with on-prem devices (router/firewall),
     - The Megaport circuit,
     - Or within AWS.

3. **Redundancy Notes**:
   - DX connections are backed by **redundant paths**:
     - Redundancy within the customer environment (on-prem)
     - Redundancy within **Megaport**
     - Redundant paths from **Megaport to AWS**

4. **Next Steps**:
   - Based on findings, further escalation may involve contacting Megaport or AWS Support.
   - Include any relevant logs, timestamps, and affected workloads in the ticket for context.

## 📝 Post-Incident

- Once the issue is resolved, ensure:
  - Alarm clears or is manually reset if required.
  - Documentation is updated with new findings.
  - Any new contacts, circuit IDs, or procedural updates are noted.

## 🔄 Update This Runbook

Update this runbook if:
- A new connection path or provider is added.
- There's a change in escalation procedure.
- Lessons learned from a recent outage lead to process changes.

